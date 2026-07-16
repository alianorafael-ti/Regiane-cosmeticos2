"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import { Produto } from "@/types/produto";

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

interface CartContextType {
  carrinho: ItemCarrinho[];
  quantidadeItens: number;
  totalCarrinho: number;

  adicionarAoCarrinho: (produto: Produto) => void;
  aumentarQuantidade: (id: number) => void;
  diminuirQuantidade: (id: number) => void;
  removerDoCarrinho: (id: number) => void;
  limparCarrinho: () => void;
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
      const existente = itensAtuais.find(
        (item) => item.produto.id === produto.id
      );

      if (existente) {
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

  function aumentarQuantidade(id: number) {
    setCarrinho((itensAtuais) =>
      itensAtuais.map((item) =>
        item.produto.id === id
          ? {
              ...item,
              quantidade: item.quantidade + 1,
            }
          : item
      )
    );
  }

  function diminuirQuantidade(id: number) {
    setCarrinho((itensAtuais) =>
      itensAtuais
        .map((item) =>
          item.produto.id === id
            ? {
                ...item,
                quantidade: item.quantidade - 1,
              }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  }

  function removerDoCarrinho(id: number) {
    setCarrinho((itensAtuais) =>
      itensAtuais.filter((item) => item.produto.id !== id)
    );
  }

  function limparCarrinho() {
    setCarrinho([]);
  }

  const quantidadeItens = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  const totalCarrinho = carrinho.reduce(
    (total, item) =>
      total + item.produto.preco * item.quantidade,
    0
  );

  return (
    <CartContext.Provider
      value={{
        carrinho,
        quantidadeItens,
        totalCarrinho,
        adicionarAoCarrinho,
        aumentarQuantidade,
        diminuirQuantidade,
        removerDoCarrinho,
        limparCarrinho,
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