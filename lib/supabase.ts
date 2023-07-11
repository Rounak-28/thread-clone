import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";

const supabase_url: any = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabase_api: any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createPagesBrowserClient();
