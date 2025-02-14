"use client";
import { useCallback, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      if (password !== passwordConfirm) {
        return alert("As senhas não coincidem");
      }

      if (
        email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i) ===
        null
      ) {
        return alert("Email inválido");
      }

      const res: RegisterResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            confirmPass: passwordConfirm,
            phone,
            name,
            document: cpf,
          }),
        }
      ).then((res) => res.json())
      .catch((error) => {
        console.error('Error:', error);
      });

      alert("Cadastro realizado com sucesso!");
    },
    [name, email, phone, cpf, password, passwordConfirm]
  );

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="name">Nome</Label>
      <Input
        className="mb-2"
        type="text"
        id="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Label htmlFor="email">Email</Label>
      <Input
        className="mb-2"
        type="email"
        id="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Label htmlFor="phone">Telefone</Label>
      <Input
        className="mb-2"
        type="tel"
        id="phone"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Label htmlFor="cpf">CPF</Label>
      <Input
        className="mb-2"
        type="text"
        id="cpf"
        required
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <Label htmlFor="password">Senha</Label>
      <Input
        className="mb-2"
        type="password"
        id="password"
        required
        minLength={6}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Label htmlFor="password-confirm">Confirme sua senha</Label>
      <Input
        className="mb-2"
        type="password"
        id="password-confirm"
        required
        minLength={6}
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <Button className="w-full bg-brand-medium font-bold" type="submit">
        Criar conta
      </Button>
    </form>
  );
};

export default RegisterForm;
