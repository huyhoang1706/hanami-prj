"use client";

import { createContext, useContext, useState } from "react";

interface Props {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export const MobileMenuContext = createContext<Props | undefined>(undefined);

export const useMobileMenuContext = () => {
  const currentMobileMenuContext = useContext(MobileMenuContext);

  if (!currentMobileMenuContext) {
    throw new Error("useMobileMenuContext has to be used within <MobileMenuContext.Provider>");
  }

  return currentMobileMenuContext;
};

export function MobileMenuContextProvider({ children }: { children: Readonly<React.ReactNode> }) {
  const [isMobileMenuOpen, setIsMenuMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuMobileOpen(!isMobileMenuOpen);
  };

  return (
    <MobileMenuContext.Provider value={{ isMobileMenuOpen, toggleMobileMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
}
