import Link from "next/link";
import { HeaderStyled } from "./Header.style";

const Header = () => {
  return (
    <HeaderStyled>
      <Link href="/">Home</Link>
      <Link href="/cursos">Curos</Link>
    </HeaderStyled>
  );
};

export default Header;
