-- Block all public SELECT access to contact_requests table
-- Only the service role (backend/admin) will be able to read this data
CREATE POLICY "No public read access" 
ON public.contact_requests 
FOR SELECT 
USING (false);