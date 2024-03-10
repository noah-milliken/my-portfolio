import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Lead, columns } from "./columns";
import { DataTable } from "./data-table";

async function getLeadData(): Promise<Lead[]> {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from("leads").select();
  if (error) {
    console.log(error.message);
  }

  return data || [];
}

export default async function DemoPage() {
  const data = await getLeadData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
