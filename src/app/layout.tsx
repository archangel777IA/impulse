import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import HashScroll from "@/components/HashScroll";

export const metadata = {
  title: "Impulse",
  description: "Desenvolvimento artístico com estrutura",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-black text-white antialiased flex flex-col">
        <HashScroll />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
