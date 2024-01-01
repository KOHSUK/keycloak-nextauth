'use client'
import { signOut } from "next-auth/react";
import { Button } from "@/components";

export function SignOutButton() {
  const handleClick = async () => {
    await signOut({ callbackUrl: '/' })
  }
  return (
    <Button onClick={handleClick}>SignOut</Button>
  )
}