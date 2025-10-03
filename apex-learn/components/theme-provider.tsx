// components/theme-provider.tsx

"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Definisikan tipe props secara eksplisit untuk mencegah error 7031
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) { // ⬅️ Sekarang menggunakan tipe yang didefinisikan
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}