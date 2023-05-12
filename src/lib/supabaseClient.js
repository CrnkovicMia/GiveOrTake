import { createClient } from "@supabase/supabase-js";

const supabase_url = 'https://xobfpixlhapreuruwsyk.supabase.co'

const supabase_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvYmZwaXhsaGFwcmV1cnV3c3lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwMTA3NjcsImV4cCI6MTk5NzU4Njc2N30.LqcxXzPAUtm8epNFb085smi0rYa94VnN1OFMwlz7ri8'

export const supabase = createClient(
    supabase_url,supabase_key
)

