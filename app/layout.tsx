import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Agencidev | Website Redesign",
  description:
    "A responsive website redesign of Agencidev built with Next.js, TypeScript, and CSS Modules. Features dark/light mode, modern UI, and optimized performance.",
  keywords: [
    "Agencidev",
    "Frontend Developer Challenge",
    "Next.js",
    "TypeScript",
    "CSS Modules",
    "Website Redesign",
    "Responsive Design",
  ],
  authors: [{ name: "Kamaluddeen Muhammad" }],
  openGraph: {
    title: "Agencidev | Website Redesign",
    description:
      "A modern, fully responsive redesign of Agencidev's website with dark/light mode and sleek UI.",
    url: "https://agencidev-redesign-git-dev-agenci-e272d2-meetkamal256s-projects.vercel.app/",
    siteName: "Agencidev Redesign",
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
