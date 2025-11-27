import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavLinks from "@/components/NavLinks";
import { Parisienne, Inter } from "next/font/google";

const parisienne = Parisienne({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-script',
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div data-theme="princess" className={`${parisienne.variable} ${inter.variable} font-sans antialiased`}>
      <Navbar>
        <NavLinks />
      </Navbar>
      {children}
      <Footer />
    </div>
  );
}
