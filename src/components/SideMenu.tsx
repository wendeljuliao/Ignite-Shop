import Image from "next/future/image";
import { X } from "phosphor-react";
import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";
import { SideMenu } from "../styles/pages/app";

interface ISideMenuProps {
  setShowSideMenu: (condicao: boolean) => void;
}

export function SideMenuComponent({ setShowSideMenu }: ISideMenuProps) {
  const { items, quantityItems, removeItemByCart } = useContext(ItemsContext);

  const itemsFormattedPrice = items.map((item) => {
    return item.price.replace("R$", "").replace(",", ".");
  });

  const sumPriceItems = itemsFormattedPrice.reduce(
    (sum, price) => sum + parseFloat(price),
    0
  );

  function handleRemoveByCart(id: string) {
    removeItemByCart(id);
  }
  return (
    <SideMenu>
      <header>
        <X size={24} weight="bold" onClick={() => setShowSideMenu(false)} />
      </header>
      <h3>Sacola de compras</h3>

      <div className="content-products">
        {items.map((item) => {
          return (
            <div key={item.id} className="product">
              <div className="wrapper-image">
                <Image
                  src={item.imageUrl}
                  width={94.79}
                  height={94.79}
                  alt=""
                />
              </div>
              <div className="info-product">
                <p>{item.name}</p>
                <strong>{item.price}</strong>

                <a onClick={() => handleRemoveByCart(item.id)}>Remover</a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="content-infos-buy">
        <div>
          <p>Quantidade</p>
          <span>{quantityItems} itens</span>
        </div>
        <div>
          <span>Valor total</span>
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(sumPriceItems)}
          </strong>
        </div>

        <button>Finalizar compra</button>
      </div>
    </SideMenu>
  );
}
