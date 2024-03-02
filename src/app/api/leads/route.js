import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import makeUrlParams from "../../../utils/randString";

export const dynamic = "force-dynamic";

export async function POST(req) {
  const url_param = makeUrlParams();
  const lead = await req.json();
  const supabase = createRouteHandlerClient({ cookies });

  const { data, error } = await supabase
    .from("leads")
    .insert({ ...lead, url_param })
    .select()
    .single();

  return NextResponse.json({ data, error });
}
