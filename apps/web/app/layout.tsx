"use client";

import { GeistProvider, CssBaseline } from "@geist-ui/core";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 90 100%22><text y=%22.9em%22 font-size=%2290%22>🌌</text></svg>"
        />
        <title>Universal Gradient Text</title>
      </head>
      <body>
        <GeistProvider themeType="dark">
          <CssBaseline />
          {children}
        </GeistProvider>
      </body>
    </html>
  );
}
