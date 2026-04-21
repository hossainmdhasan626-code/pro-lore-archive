import { Cinzel, Crimson_Pro, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// The use case of this font was "display heading, title, name ,logo, numbers"
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
});

// The use case of this font was "body, lore-paragraphs, hero-section, descriptions, bios,
// navigations, input items, characters title"
const crimson = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
});

// The use case of this font was "technical, labels, tags, badges, metadata,
// timeline tags or name"
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-mono",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${crimson.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="bg-main-app-bg">{children}</body>
    </html>
  );
}
