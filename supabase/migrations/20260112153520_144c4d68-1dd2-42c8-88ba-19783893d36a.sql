-- Create table for contact form submissions
CREATE TABLE public.contact_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  ai_objective TEXT NOT NULL,
  project_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Anyone can submit contact request" 
ON public.contact_requests 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated admins could read (for future admin panel)
-- For now, data is write-only from frontend