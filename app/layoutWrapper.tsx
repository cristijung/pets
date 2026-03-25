'use client';

import { PetProvider } from "@/hooks/usePets";
import { ReactNode } from "react";

export function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <PetProvider>
      {/* aqui podemos add outros Providers mais adiante */}
      {children}
    </PetProvider>
  );
}