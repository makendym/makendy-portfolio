import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Box } from "@mui/material";
import { pageGradientBackground } from "./assets";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./styles/globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "I am Makendy",
  description: "Created by Makendy Midouin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <style>
          {`
            /* Custom Scrollbar Styles */
            ::-webkit-scrollbar {
              width: 8px;
            }

            ::-webkit-scrollbar-track {
              background: transparent;
            }

            ::-webkit-scrollbar-thumb {
              background: rgba(0, 0, 0, 0.3);
              border-radius: 4px;
            }

            ::-webkit-scrollbar-thumb:hover {
              background: rgba(0, 0, 0, 0.6);
            }

            /* Firefox Scrollbar */
            scrollbar-width: thin;
            scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
          `}
        </style>
      </head>
      <body>
        <AppRouterCacheProvider>
          <Box
            component="main"
            sx={{
              position: "relative",
              minHeight: "100vh", // Ensures it covers at least the height of the viewport
              height: "100%", // Ensures it stretches the full height if content is short
            }}
          >
            {/* Foreground overlay */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(36, 36, 36, 0.8)", // Dark overlay to soften the gradient
              }}
            />
            <Navbar />
            {children}
            <Analytics />
            <Footer/>
          </Box>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}