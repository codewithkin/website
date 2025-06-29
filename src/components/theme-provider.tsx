// components/theme-provider.tsx
'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

/**
 * App‑wide ThemeProvider.
 *
 * Defaults:
 *   • attribute      → "class"   → adds class="dark" to <html> in dark mode
 *   • defaultTheme   → "light"   → starts in light mode (unless system pref)
 *   • enableSystem   → true      → respects OS/browser colour‑scheme
 */
export function ThemeProvider({
  children,
  ...props
}: any) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
