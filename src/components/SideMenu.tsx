import Image from "next/future/image";
import { X } from "phosphor-react";
import { SideMenu } from "../styles/pages/app";

interface ISideMenuProps {
  setShowSideMenu: (condicao: boolean) => void;
}

export function SideMenuComponent({ setShowSideMenu }: ISideMenuProps) {
  return (
    <SideMenu>
      <header>
        <X size={24} weight="bold" onClick={() => setShowSideMenu(false)} />
      </header>
      <h3>Sacola de compras</h3>

      <div className="content-products">
        <div className="product">
          <div className="wrapper-image">
            <Image src={""} width={94.79} height={94.79} alt="" />
          </div>
          <div className="info-product">
            <p>Camiseta Beyond the Limits</p>
            <strong>R$ 79,90</strong>

            <a>Remover</a>
          </div>
        </div>
      </div>

      <div className="content-infos-buy">
        <div>
          <p>Quantidade</p>
          <span>3 itens</span>
        </div>
        <div>
          <span>Valor total</span>
          <strong>R$ 270,00</strong>
        </div>

        <button>Finalizar compra</button>
      </div>
    </SideMenu>
  );
}
