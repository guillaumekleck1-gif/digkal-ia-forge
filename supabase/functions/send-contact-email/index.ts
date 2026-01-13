import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// HTML escape function to prevent XSS
function escapeHtml(text: string | undefined | null): string {
  if (!text) return "";
  return text.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return map[char];
  });
}

interface ContactEmailRequest {
  company: string;
  role: string;
  email: string;
  phone?: string;
  ai_objective: string;
  project_description?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { company, role, email, phone, ai_objective, project_description }: ContactEmailRequest = await req.json();

    // Escape all user inputs to prevent XSS
    const safeCompany = escapeHtml(company);
    const safeRole = escapeHtml(role);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeAiObjective = escapeHtml(ai_objective);
    const safeProjectDescription = escapeHtml(project_description);

    // Email to DIGKAL team
    const teamEmailResponse = await resend.emails.send({
      from: "DIGKAL <noreply@digkal.fr>",
      to: ["contact@digkal.fr"],
      subject: `Nouvelle demande de contact - ${safeCompany}`,
      html: `
        <h1>Nouvelle demande de contact</h1>
        <p><strong>Société :</strong> ${safeCompany}</p>
        <p><strong>Rôle :</strong> ${safeRole}</p>
        <p><strong>Email :</strong> ${safeEmail}</p>
        <p><strong>Téléphone :</strong> ${safePhone || "Non renseigné"}</p>
        <p><strong>Objectif IA :</strong> ${safeAiObjective}</p>
        <p><strong>Description du projet :</strong></p>
        <p>${safeProjectDescription || "Non renseigné"}</p>
      `,
    });

    console.log("Team email sent:", teamEmailResponse);

    // Confirmation email to the user
    const userEmailResponse = await resend.emails.send({
      from: "DIGKAL <noreply@digkal.fr>",
      to: [email], // Use original email for sending, not escaped
      subject: "Nous avons bien reçu votre demande - DIGKAL",
      html: `
        <h1>Merci pour votre demande, ${safeCompany} !</h1>
        <p>Nous avons bien reçu votre demande concernant : <strong>${safeAiObjective}</strong></p>
        <p>Un expert IA de notre équipe vous contactera dans les plus brefs délais pour étudier votre projet.</p>
        <br>
        <p>À très bientôt,</p>
        <p><strong>L'équipe DIGKAL</strong></p>
        <p>📞 06 78 01 57 32</p>
        <p>📧 contact@digkal.fr</p>
      `,
    });

    console.log("User confirmation email sent:", userEmailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);