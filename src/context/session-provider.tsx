"use client";

import { SessionProvider } from "next-auth/react";

export default function AuthProvider({ children }: React.PropsWithChildren) {
  return <SessionProvider>{children}</SessionProvider>;
}

// username: "mor_2314",
// password: "83r5^_"
