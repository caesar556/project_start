import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import "../globals.css";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen w-full font-inter">
      <div>
        <NavBar />
      </div>
      {children}
      <Footer />
    </main>
  );
}
