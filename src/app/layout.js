import "./globals.css";
import { avenir, cormorant } from "@/lib/fonts";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" className={`${avenir.variable} ${cormorant.variable}`}
    >
      <body >{children}</body>
    </html>
  );
}
