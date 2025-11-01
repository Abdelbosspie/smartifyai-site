// app/layout.js
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "SmartifyAI – Diagnostic",
  description: "Minimal Next.js app to verify Analytics + Speed Insights."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        {children}
        {/* Vercel Web Analytics + Speed Insights */}
        <Analytics />
        <SpeedInsights />
        <script src="/script.js" defer></script>
      </body>
    </html>
  );
}
