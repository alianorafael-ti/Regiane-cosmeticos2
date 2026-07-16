"use client";

import Image from "next/image";
import { useState } from "react";
import { Produto } from "@/types/produto";
import ProductModal from "./ProductModal";

interface ProductCardProps {
  produto: Produto;
}

export default function ProductCard({ produto }: ProductCardProps) {
  const [mostrarModal, setMostrarModal] = useState(false);
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">

      <div
  className="
    relative
    flex
    h-64
    cursor-pointer
    items-center
    justify-center
    bg-gray-50
    p-6
  "
  onClick={() => setMostrarModal(true)}
>
        <Image
          src={produto.imagem}
          alt={produto.nome}
          width={250}
          height={250}
          className="h-full w-full object-contain transition hover:scale-110"
        />
      </div>

      <div className="flex flex-col gap-3 p-5">

        <h3 className="min-h-14 text-lg font-semibold text-gray-800">
          {produto.nome}
        </h3>

        <p className="text-2xl font-bold text-pink-700">
          {produto.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

        <p className="text-sm text-gray-600">
          Estoque disponível:{" "}
          <span className="font-semibold text-green-600">
            {produto.estoque}
          </span>
        </p>

        <a
          href={produto.linkShopee}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 rounded-full bg-pink-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-pink-700"
        >
          Comprar na Shopee
        </a>

      </div>
      {mostrarModal && (
  <ProductModal
    produto={produto}
    fechar={() => setMostrarModal(false)}
  />
)}

    </article>
  );
}