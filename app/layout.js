//'use client'
import useLenis from "@/hooks/useLenis";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";


export const metadata = {
  title: "Portfoliyo",
  description: "My portfoliyo Project",
};

export default function RootLayout({ children }) {
 // useLenis();
  return (
    <html
      lang="en"
      className={` h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SmoothScroller>{children}</SmoothScroller>
      </body>
    </html>
  );
}
