import "./globals.css";
import { siteConfig } from "@/data/site";

export const metadata = {
  metadataBase: new URL("https://mohonstack.github.io"),
  title: {
    default: "Md. Mohon — Junior Full-Stack Web Developer",
    template: "%s · Md. Mohon",
  },
  description:
    "Portfolio of Md. Mohon, a junior full-stack web developer from Bangladesh building web applications with JavaScript, React and Next.js.",
  keywords: [
    "Md. Mohon",
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "JavaScript",
    "Bangladesh",
    "web developer portfolio",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: "Md. Mohon — Junior Full-Stack Web Developer",
    description:
      "Building digital experiences that solve real problems. JavaScript, React and Next.js projects by Md. Mohon.",
    url: "https://mohonstack.github.io",
    siteName: "MOHON.DEV",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Md. Mohon — Junior Full-Stack Web Developer",
    description:
      "Building digital experiences that solve real problems. JavaScript, React and Next.js projects by Md. Mohon.",
  },
};

export const viewport = {
  themeColor: "#0b0c0e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
