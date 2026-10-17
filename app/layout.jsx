import "./globals.css";
import AppSplashController from "./AppSplashController";

export const metadata = {
  metadataBase: new URL("https://privatemeet.imperfectprotocol.ie"),
  title: "Private Meet by Imperfect Protocol",
  description: "Private Meet by Imperfect Protocol is an early-stage protocol R&D project building private, peer-to-peer meet infrastructure on Arbitrum.",
  authors: [{ name: "Imperfect Protocol" }],
  icons: {
    icon: "/favicon.jpg"
  },
  openGraph: {
    type: "website",
    url: "https://privatemeet.imperfectprotocol.ie",
    title: "Private Meet by Imperfect Protocol",
    description: "Private Meet by Imperfect Protocol is an early-stage protocol R&D project building private, peer-to-peer meet infrastructure on Arbitrum.",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 627,
        alt: "Private Meet by Imperfect Protocol"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Meet by Imperfect Protocol",
    description: "Private Meet by Imperfect Protocol is an early-stage protocol R&D project building private, peer-to-peer meet infrastructure on Arbitrum.",
    images: ["/preview.png"]
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