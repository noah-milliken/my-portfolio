import Link from "next/link";

import {
  BackpackIcon,
  EnvelopeClosedIcon,
  HomeIcon,
  IdCardIcon,
  MixIcon,
} from "@radix-ui/react-icons";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { KeyRound } from "lucide-react";

export default async function Nav() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  return (
    <nav className="flex flex-col flex-wrap gap-4">
      <Link href={"/"} className="flex">
        <span className="mr-3">
          <HomeIcon width="22" height="22" />
        </span>
        Home
      </Link>
      <Link href={"/about"} className="flex">
        <span className="mr-3">
          <IdCardIcon width="22" height="22" />
        </span>
        About
      </Link>
      <Link href={"/services"} className="flex">
        <span className="mr-3">
          <MixIcon width="22" height="22" />
        </span>
        Services
      </Link>
      <Link href={"/projects"} className="flex">
        <span className="mr-3">
          <BackpackIcon width="22" height="22" />
        </span>
        Projects
      </Link>
      <Link href={"/contact"} className="flex">
        <span className="mr-3">
          <EnvelopeClosedIcon width="22" height="22" />
        </span>
        Contact
      </Link>
      {data.session && (
        <Link href={"/admin"} className="flex">
          <span className="mr-3">
            <KeyRound width="22" height="22" />
          </span>
          Admin
        </Link>
      )}
    </nav>
  );
}
