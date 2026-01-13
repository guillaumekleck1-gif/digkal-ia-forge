-- Drop the restrictive INSERT policy
DROP POLICY IF EXISTS "Anyone can submit contact request" ON public.contact_requests;

-- Create a PERMISSIVE INSERT policy for public submissions
CREATE POLICY "Anyone can submit contact request"
ON public.contact_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);