// //'use client'
// import useLenis from "@/hooks/useLenis";
// import "./globals.css";
// import SmoothScroller from "@/components/SmoothScroller";
// import Navbar from "@/components/Navbar";
// import CustomCursor from "@/components/CustomCursor";

// export const metadata = {
//   title: "Portfoliyo",
//   description: "My portfoliyo Project",
// };

// export default function RootLayout({ children }) {
//  // useLenis();
//   return (
//     <html
//       lang="en"
//       className={` h-full antialiased`}>
//       <body className="min-h-full flex flex-col">
//         <CustomCursor />
//         <Navbar />
//         <SmoothScroller>{children}</SmoothScroller>
//       </body>
//     </html>
//   );
// }



import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Portfolio",
  description: "My Portfolio Project",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">

        <ThemeProvider>

          <CustomCursor />

          <Navbar />

          <SmoothScroller>
            {children}
          </SmoothScroller>

        </ThemeProvider>

      </body>
    </html>
  );
}