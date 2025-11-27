import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavLinks from "@/components/NavLinks";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar>
        <NavLinks />
      </Navbar>
      {children}
      <Footer />
    </>
  );
}
