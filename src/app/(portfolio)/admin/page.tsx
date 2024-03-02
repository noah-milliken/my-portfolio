import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CreateLeadForm from "./CreateLeadForm";

export default async function Admin() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect("/login");
  }
  return (
    <div className="flex flex-col justify-center w-full">
      <CreateLeadForm />
    </div>
  );
}
