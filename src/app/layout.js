import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
const poppins = Poppins(
  {
    weight: ['100', '200', '400', '500', '600', '800']
  }
)


export const metadata = {
  metadataBase: new URL("https://care-nest-dusky.vercel.app/"),

  title: {
    default: "Care Nest | Connecting Caregivers & Services",
    template: "%s | Care Nest",
  },

  description:
    "Care Nest is a user-friendly platform connecting caregivers with clients. Discover services, manage profiles, and access reliable care with ease.",

  keywords: [
    "caregivers",
    "care services",
    "healthcare",
    "home care",
    "elder care",
    "child care",
    "Care Nest",
  ],

  authors: [{ name: "Your Name", url: "https://www.carenest.com/about" }],
  creator: "Your Name",

  openGraph: {
    title: "Care Nest | Connecting Caregivers & Services",
    description:
      "Care Nest is a platform connecting caregivers with clients for reliable care and services.",
    url: "https://www.carenest.com",
    siteName: "Care Nest",
    images: [
      {
        url: "https://i.ibb.co.com/JWghMXXz/image.png", // homepage hero
        width: 1200,
        height: 630,
        alt: "Care Nest Homepage Preview",
      },
      {
        url: "https://i.ibb.co.com/Wpq4SxQF/image.png", // logo fallback
        width: 800,
        height: 800,
        alt: "Care Nest Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Care Nest | Connecting Caregivers & Services",
    description:
      "Care Nest connects caregivers with clients to provide reliable and professional services.",
    images: ["https://i.ibb.co.com/JWghMXXz/image.png"],
    creator: "@yourTwitterHandle",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.carenest.com",
  },

  category: "healthcare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <header className="py-2 md:w-11/12 mx-auto">
          <Navbar />
        </header>
        <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-302px)]">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
