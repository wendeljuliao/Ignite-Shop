import { useState, createContext, ReactNode } from "react";

interface IItemProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

interface IItemsContextType {
  items: IItemProps[];
  quantityItems: number;
  addItemByCart: (newItem: IItemProps) => void;
  removeItemByCart: (id: string) => void;
}

export const ItemsContext = createContext({} as IItemsContextType);

interface IItemsProviderProps {
  children: ReactNode;
}

export function ItemsProvider({ children }: IItemsProviderProps) {
  const [items, setItems] = useState<IItemProps[]>([]);

  function addItemByCart(newItem: IItemProps) {
    setItems((state) => [...state, newItem]);
  }

  function removeItemByCart(id: string) {
    const itemsUpdated = items.filter((item) => item.id !== id);
    setItems(itemsUpdated);
  }

  const quantityItems = items.length;

  return (
    <ItemsContext.Provider
      value={{ items, quantityItems, addItemByCart, removeItemByCart }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
