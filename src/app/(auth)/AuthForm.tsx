"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function AuthForm({ handleSubmit }: any) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <form
      onSubmit={(e) => handleSubmit(e, email, password)}
      className="flex flex-col space-y-8"
    >
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          required
        />
      </label>
      <label>
        <span>password</span>
        <input
          type="passwprd"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          required
        />
      </label>
      <Button>Submit</Button>
    </form>
  );
}

export default AuthForm;
