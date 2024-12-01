"use client";

import { MobileMenuContextProvider } from "@/contexts/MobileMenuContext";

export default function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
  return <MobileMenuContextProvider>{children}</MobileMenuContextProvider>;
}
