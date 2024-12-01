"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useMobileMenuContext } from "@/contexts/MobileMenuContext";

interface Props {
  className?: string;
}

export default function MobileMenuButton({ className }: Props) {
  const { toggleMobileMenu, isMobileMenuOpen } = useMobileMenuContext();

  return (
    <Button
      onClick={() => toggleMobileMenu()}
      variant="outline"
      className={cn("border-blue-600 bg-transparent md:hidden", className)}
    >
      {isMobileMenuOpen ? <X className="text-blue-700" /> : <Menu className="text-blue-700" />}
    </Button>
  );
}
