import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      persistSession: false,
    },
  }
);

// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

// const supabase_url: any = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabase_api: any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// export const supabase = createServerComponentClient({cookies});
