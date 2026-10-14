import "./globals.css";
import AppSplashController from "./AppSplashController";

export const metadata = {
  title: "Private Meet by Imperfect Protocol",
  description: "Private Meet by Imperfect Protocol is an early-stage protocol R&D project building private, peer-to-peer meet infrastructure on Arbitrum.",
  authors: [{ name: "Imperfect Protocol" }],
  icons: {
    icon: "/favicon.jpg"
  },
  openGraph: {
    type: "website",
    url: "https://private-meet.wasmer.app/",
    title: "Private Meet by Imperfect Protocol",
    description: "Private Meet by Imperfect Protocol is an early-stage protocol R&D project building private, peer-to-peer meet infrastructure on Arbitrum.",
    images: ["https://private-meet.wasmer.app/preview.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Meet by Imperfect Protocol",
    description: "Private Meet by Imperfect Protocol is an early-stage protocol R&D project building private, peer-to-peer meet infrastructure on Arbitrum.",
    images: ["https://private-meet.wasmer.app/preview.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <AppSplashController />
      </body>
    </html>
  );
}
