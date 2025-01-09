import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProvider from "@/components/Provider"; // Correct import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Ecommerce Website", // Update with your website name
  description: "Your one-stop shop for amazing products!", // Update with your website description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap everything inside CartProvider to share the cart state */}
        <CartProvider>
          <Header />
          <main className="max-w-screen-2xl mx-auto">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}