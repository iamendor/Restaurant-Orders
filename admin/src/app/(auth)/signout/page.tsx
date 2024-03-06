"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
//TODO: make it fine
export default function SignOut() {
  const router = useRouter();
  useEffect(() => {
    signOut({ redirect: false }).then(() => router.push("/signin"));
  }, []);
  return <div>Sign out...</div>;
}
