import { Inter, Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import HeaderMain from "./Components/HeaderMain";
import FooterMain from "./Components/FooterMain";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import AOSProvider from "./Components/AOSProvider";
import { AnimationProvider } from "./Components/AnimatedElement";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <NextTopLoader
          color="#63af51"
          initialPosition={0.08}
          crawlSpeed={600}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #63af51,0 0 5px #145D3E"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
        <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
          <HeaderMain />
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              // Global styles
              style: {
                background: "#fff",
                color: "#11161F",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "15px",
                borderRadius: "8px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              },
              // Success toast
              success: {
                style: {
                  background: "#0065EC",
                  color: "#fff",
                },
                iconTheme: {
                  primary: "#fff",
                  secondary: "#0065EC",
                },
              },
              // Error toast
              error: {
                style: {
                  background: "#FF6900",
                  color: "#fff",
                },
                iconTheme: {
                  primary: "#fff",
                  secondary: "#FF6900",
                },
              },
            }}
          />
          <AOSProvider>
            <AnimationProvider>
              {children}
            </AnimationProvider>
          </AOSProvider>
          <FooterMain />
      </body>
    </html>
  );
}
