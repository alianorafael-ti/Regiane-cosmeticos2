"use client";

import { useCarrinho } from "@/context/CartContext";

interface CartDrawerProps {
  aberto: boolean;
  fechar: () => void;
}

export default function CartDrawer({
  aberto,
  fechar,
}: CartDrawerProps) {
  const {
    carrinho,
    totalCarrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    removerDoCarrinho,
  } = useCarrinho();

  return (
    <>
      {/* Fundo escuro */}
      {aberto && (
        <div
          onClick={fechar}
          className="fixed inset-0 z-40 bg-black/50"
        />
      )}

      {/* Painel */}
      <aside
        className={`
          fixed
          top-0
          right-0
          z-50
          flex
          h-screen
          w-full
          max-w-md
          flex-col
          bg-white
          text-gray-800
          shadow-2xl
          transition-transform
          duration-300
          ${
            aberto
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between border-b border-gray-200 p-5">

          <h2 className="text-2xl font-bold text-gray-900">
            🛒 Meu Carrinho
          </h2>

          <button
            onClick={fechar}
            className="text-2xl text-gray-500 transition hover:text-pink-600"
          >
            ✕
          </button>

        </div>

        {/* Conteúdo */}
        <div className="flex-1 overflow-y-auto p-5">

          {carrinho.length === 0 ? (

            <p className="text-center text-gray-500">
              Seu carrinho está vazio.
            </p>

          ) : (

            <div className="space-y-6">

              {carrinho.map((item) => (

                <div
                  key={item.produto.id}
                  className="border-b border-gray-200 pb-5"
                >

                  <h3 className="font-semibold text-gray-900">
                    {item.produto.nome}
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">
                    {item.produto.preco.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>

                  <div className="mt-4 flex items-center gap-3">

                    <button
                      onClick={() =>
                        diminuirQuantidade(item.produto.id)
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 font-bold transition hover:bg-gray-300"
                    >
                      −
                    </button>

                    <span className="min-w-6 text-center font-bold text-gray-900">
                      {item.quantidade}
                    </span>

                    <button
                      onClick={() =>
                        aumentarQuantidade(item.produto.id)
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 font-bold transition hover:bg-gray-300"
                    >
                      +
                    </button>

                  </div>

                  <button
                    onClick={() =>
                      removerDoCarrinho(item.produto.id)
                    }
                    className="mt-4 text-sm font-medium text-red-600 hover:underline"
                  >
                    Remover
                  </button>

                </div>

              ))}

            </div>

          )}

        </div>

        {/* Rodapé */}
        <div className="border-t border-gray-200 p-5">

          <p className="mb-4 text-xl font-bold text-gray-900">

            Total:{" "}

            {totalCarrinho.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}

          </p>

          <button
            className="
              w-full
              rounded-full
              bg-pink-600
              py-3
              font-semibold
              text-white
              transition
              hover:bg-pink-700
            "
          >
            🛍 Finalizar na Shopee
          </button>

        </div>

      </aside>
    </>
  );
}