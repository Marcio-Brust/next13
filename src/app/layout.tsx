import { ReactNode } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import StyledComponentsRegistry from "u@/app/registryndefined";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  );
}
