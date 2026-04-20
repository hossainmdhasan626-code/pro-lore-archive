import Sidebar from "./components/shared/Sidebar";
import { Cinzel, Crimson_Pro, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation_context_provider from "./context/context_provider/Navigation_context_provider";

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
      <body className="bg-main-app-bg">
        {/* Wrap the holl application with Navigation_context_provider */}
        <Navigation_context_provider>
          {/* Create a div rapper for sidebar and main containt */}
          <div className="flex min-h-screen w-full">
            {/* A div rapper for take the % of width for sidebar */}
            <div className="w-[13%] bg-card-sidebar-bg">
              {/* The sidebar component */}
              <Sidebar />
            </div>

            {/* A div rapper for take the % of width for maiin containt */}
            <div className="w-[87%]">
              {/* The main containt */}
              {children}
            </div>
          </div>
        </Navigation_context_provider>
      </body>
    </html>
  );
}
