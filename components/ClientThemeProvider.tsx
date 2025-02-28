"use client"

import type React from "react"

import { ThemeProvider } from "@mui/material/styles"
import { theme } from "@/lib/theme"

export default function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

