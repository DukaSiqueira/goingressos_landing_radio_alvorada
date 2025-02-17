"use client";
import { useCallback, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      if (email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i) === null) {
        return alert("Email inválido");
      }

      const res: LoginResponse  = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }).then((res) => res.json())
      .catch((error) => {
        console.error('Error:', error);
      });

      if (!res.accessToken) {
        return alert("Credenciais inválidas");
      }

      sessionStorage.setItem("accessToken", res.accessToken);
      sessionStorage.setItem("userData", JSON.stringify(res.userData));
      window.location.href = "/planos";
    },
    [email, password]
  );

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="email">Email</Label>
      <Input
        className="mb-2"
        type="email"
        id="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Label htmlFor="password">Senha</Label>
      <Input
        className="mb-4"
        type="password"
        id="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button className="w-full bg-brand-medium font-bold" type="submit">
        Entrar
      </Button>
    </form>
  );
};

export default LoginForm;
