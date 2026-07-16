"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import { Produto } from "@/types/produto";


interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}


interface CartContextType {
  carrinho: ItemCarrinho[];
  adicionarAoCarrinho: (produto: Produto) => void;
  removerDoCarrinho: (id: number) => void;
}


const CartContext = createContext<CartContextType | undefined>(
  undefined
);


interface CartProviderProps {
  children: ReactNode;
}


export function CartProvider({ children }: CartProviderProps) {

  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);


  function adicionarAoCarrinho(produto: Produto) {

    setCarrinho((itensAtuais) => {

      const produtoExistente = itensAtuais.find(
        (item) => item.produto.id === produto.id
      );


      if (produtoExistente) {

        return itensAtuais.map((item) =>
          item.produto.id === produto.id
            ? {
                ...item,
                quantidade: item.quantidade + 1,
              }
            : item
        );

      }


      return [
        ...itensAtuais,
        {
          produto,
          quantidade: 1,
        },
      ];

    });

  }


  function removerDoCarrinho(id: number) {

    setCarrinho((itensAtuais) =>
      itensAtuais.filter(
        (item) => item.produto.id !== id
      )
    );

  }


  return (
    <CartContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
      }}
    >
      {children}
    </CartContext.Provider>
  );

}


export function useCarrinho() {

  const contexto = useContext(CartContext);


  if (!contexto) {
    throw new Error(
      "useCarrinho deve ser usado dentro do CartProvider"
    );
  }


  return contexto;

}