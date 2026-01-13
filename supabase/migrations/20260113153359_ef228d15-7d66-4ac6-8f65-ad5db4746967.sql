-- Drop existing SELECT policy (restrictive)
DROP POLICY IF EXISTS "Admins can read all contact requests" ON public.contact_requests;

-- Create PERMISSIVE SELECT policy for admins only
CREATE POLICY "Only admins can read contact requests"
ON public.contact_requests
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Add UPDATE policy for admins only
CREATE POLICY "Only admins can update contact requests"
ON public.contact_requests
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Add DELETE policy for admins only
CREATE POLICY "Only admins can delete contact requests"
ON public.contact_requests
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));