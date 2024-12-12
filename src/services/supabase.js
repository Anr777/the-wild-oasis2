
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://vtdgwpqrasfspabcaoql.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0ZGd3cHFyYXNmc3BhYmNhb3FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4NTQ1MzQsImV4cCI6MjA0OTQzMDUzNH0.uGHRbaBeo6D-FxQJ689zM2LPuLkC7bVNVxPNB8w3dCI';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;