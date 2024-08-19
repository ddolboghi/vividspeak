"use server";

import { createClient } from "@supabase/supabase-js";

export async function postRegisterToSupabase(
  name: string,
  phoneNumber: string
): Promise<Boolean> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY as string
  );
  const { data, error } = await supabase
    .from("register")
    .insert([{ name: name, phone_number: phoneNumber }])
    .select();

  console.log("data: ", data);
  console.log("error: ", error);

  if (error !== null) {
    return false;
  }

  return true;
}
