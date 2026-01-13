import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LogOut, RefreshCw, Mail, Phone, Building2, Briefcase, Target, FileText } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface ContactRequest {
  id: string;
  created_at: string;
  company: string;
  role: string;
  email: string;
  phone: string | null;
  ai_objective: string;
  project_description: string | null;
}

const roleLabels: Record<string, string> = {
  dirigeant: "Dirigeant",
  dsi: "DSI / IT",
  innovation: "Innovation",
  metier: "Direction Métier",
  autre: "Autre",
};

const objectiveLabels: Record<string, string> = {
  automatisation: "Automatisation",
  agent: "Agent IA",
  logiciel: "Logiciel IA",
  formation: "Formation",
  conseil: "Conseil",
  autre: "Autre",
};

export default function AdminDashboard() {
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<ContactRequest | null>(null);
  const { user, isAdmin, signOut, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate("/admin/login");
    }
  }, [user, isAdmin, authLoading, navigate]);

  const fetchRequests = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contact_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching requests:", error);
    } else {
      setRequests(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user && isAdmin) {
      fetchRequests();
    }
  }, [user, isAdmin]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login");
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">DIGKAL Admin</h1>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={fetchRequests} disabled={loading}>
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              Actualiser
            </Button>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Table */}
          <div className="lg:col-span-2">
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Demandes de contact</h2>
                <Badge variant="secondary">{requests.length} demande(s)</Badge>
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : requests.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  Aucune demande de contact pour le moment.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Société</TableHead>
                        <TableHead>Objectif</TableHead>
                        <TableHead>Contact</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {requests.map((request) => (
                        <TableRow
                          key={request.id}
                          className={`cursor-pointer transition-colors ${
                            selectedRequest?.id === request.id
                              ? "bg-primary/10"
                              : "hover:bg-muted/50"
                          }`}
                          onClick={() => setSelectedRequest(request)}
                        >
                          <TableCell className="whitespace-nowrap">
                            {format(new Date(request.created_at), "dd MMM yyyy", { locale: fr })}
                          </TableCell>
                          <TableCell className="font-medium">{request.company}</TableCell>
                          <TableCell>
                            <Badge variant="outline">
                              {objectiveLabels[request.ai_objective] || request.ai_objective}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-muted-foreground">{request.email}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6 sticky top-24">
              {selectedRequest ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{selectedRequest.company}</h3>
                    <p className="text-sm text-muted-foreground">
                      {format(new Date(selectedRequest.created_at), "dd MMMM yyyy 'à' HH:mm", {
                        locale: fr,
                      })}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Rôle</p>
                        <p className="font-medium">
                          {roleLabels[selectedRequest.role] || selectedRequest.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a
                          href={`mailto:${selectedRequest.email}`}
                          className="font-medium text-primary hover:underline"
                        >
                          {selectedRequest.email}
                        </a>
                      </div>
                    </div>

                    {selectedRequest.phone && (
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Téléphone</p>
                          <a
                            href={`tel:${selectedRequest.phone}`}
                            className="font-medium text-primary hover:underline"
                          >
                            {selectedRequest.phone}
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Objectif IA</p>
                        <Badge>
                          {objectiveLabels[selectedRequest.ai_objective] ||
                            selectedRequest.ai_objective}
                        </Badge>
                      </div>
                    </div>

                    {selectedRequest.project_description && (
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground">Description du projet</p>
                          <p className="text-sm mt-1">{selectedRequest.project_description}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Button className="w-full" asChild>
                      <a href={`mailto:${selectedRequest.email}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Répondre par email
                      </a>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Building2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Sélectionnez une demande pour voir les détails</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
