import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { BookingProvider } from "@/context/BookingContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Wealth Find",
};


const headerData = {
  navbars: [
    { title: "Home", link: "/" },
    { title: "Rooms", link: "/dashboard" },
    { title: "My Bookings", link: "/my-bookings" },
    { title: "About Us", link: "/aboutus" },
    { title: "Contact", link: "/contact" },
  ],
};

const footerData = {
  pages: [
    { title: "Privacy Policy", link: "/privacy" },
    { title: "Terms & Conditions", link: "/terms" },
  ],
  contactInfo: {
    phone: "+91 9876543210",
    email: "info@shriharipooja.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <AuthProvider>
          <BookingProvider>
            <Header />
            {children}
            <Footer footerData={footerData} />
          </BookingProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
