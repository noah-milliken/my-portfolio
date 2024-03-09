"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any, email: string, password: string) => {
    e.preventDefault();
    setError("");
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!error) {
      router.push("/admin");
    }
    if (error) {
      setError(error.message);
      console.log(error);
    }
  };
  return (
    <main className="h-screen">
      <h1>Login</h1>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <h3>{error}</h3>}
    </main>
  );
}
