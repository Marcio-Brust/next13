import { ReactNode } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
