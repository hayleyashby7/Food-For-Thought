import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    'https://lyvfiqkbuwzajozklwow.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5dmZpcWtidXd6YWpvemtsd293Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4MjQwOTUsImV4cCI6MjAwNjQwMDA5NX0.e4WjzlbK9Nbt14N3qmL92rmB13dYFw4JaU9_6i2y7yI'
);

export default  supabase;