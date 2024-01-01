'use client'
import { Button } from "@/components";
import { signIn } from "next-auth/react";

export function SignInButton() {
  const handleClick = async () => {
    await signIn('keycloak', { callbackUrl: '/dashboard' })
  }
  return (
    <Button onClick={handleClick}>SignIn</Button>
  )
}