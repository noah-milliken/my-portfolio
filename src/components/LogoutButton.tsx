"use client";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    console.log("logout");
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push("/");
    }
  };

  return (
    <button className="btn-secondary" onClick={handleLogout}>
      Logout
    </button>
  );
}
