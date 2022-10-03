import { useContext } from "react";
import Image from "next/future/image";
import { Handbag } from "phosphor-react";
import { Header } from "../styles/pages/app";
import { ItemsContext } from "../contexts/ItemsContext";

import logoImg from "../assets/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";

interface IHeaderProps {
  setShowSideMenu: (condicao: boolean) => void;
}

export function HeaderComponent({ setShowSideMenu }: IHeaderProps) {
  const { quantityItems } = useContext(ItemsContext);

  function handleShowSideMenu() {
    if (quantityItems > 0) {
      setShowSideMenu(true);
    }
  }

  const pathnameIsSuccess = useRouter().pathname.includes("/success");

  const enabledBag = quantityItems > 0;
  return (
    <Header enabledBag={enabledBag} pathnameIsSuccess={pathnameIsSuccess}>
      <Link href="/" prefetch={false}>
        <Image src={logoImg} alt="" />
      </Link>

      {!pathnameIsSuccess && <div onClick={handleShowSideMenu}>
        {enabledBag && <div>{quantityItems}</div>}
        <Handbag size={24} weight="bold" />
      </div>}
    </Header>
  );
}
