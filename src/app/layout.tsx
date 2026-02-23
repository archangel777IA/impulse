import "./globals.css";
import Header from "@/components/Header";
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
      <body className="min-h-screen bg-black text-white antialiased">
        <HashScroll />
        <Header />
        {children}
      </body>
    </html>
  );
}