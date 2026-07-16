import Image from "next/image";
import { Produto } from "@/types/produto";
import { useCarrinho } from "@/context/CartContext";

interface ProductModalProps {
  produto: Produto;
  fechar: () => void;
}

export default function ProductModal({
  produto,
  fechar,
}: ProductModalProps) {

  const { adicionarAoCarrinho } = useCarrinho();

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/60
        p-4
      "
      onClick={fechar}
    >
      <div
        className="
          relative
          max-h-[90vh]
          w-full
          max-w-4xl
          overflow-y-auto
          rounded-3xl
          bg-white
          p-6
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >

        <button
          onClick={fechar}
          className="
            absolute
            right-5
            top-4
            text-2xl
            font-bold
            text-gray-500
            hover:text-pink-600
          "
        >
          ✕
        </button>


        <div className="grid gap-8 md:grid-cols-2">

          <div className="flex items-center justify-center">
            <Image
              src={produto.imagem}
              alt={produto.nome}
              width={450}
              height={450}
              className="object-contain"
            />
          </div>


          <div className="flex flex-col gap-4">

            <h2 className="text-3xl font-bold text-gray-800">
              {produto.nome}
            </h2>


            <p className="text-gray-600">
              {produto.descricao}
            </p>


            <div className="space-y-2 text-gray-700">

              <p>
                <strong>Marca:</strong> {produto.marca}
              </p>

              <p>
                <strong>Categoria:</strong> {produto.categoria}
              </p>

              <p>
                <strong>Volume:</strong> {produto.volume}
              </p>

              <p>
                <strong>Estoque:</strong> {produto.estoque}
              </p>

            </div>


            <p className="text-3xl font-bold text-pink-700">
              {produto.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>


            <button
              onClick={() => adicionarAoCarrinho(produto)}
              className="
                rounded-full
                bg-green-600
                px-6
                py-3
                text-center
                font-semibold
                text-white
                hover:bg-green-700
              "
            >
              🛒 Adicionar ao carrinho
            </button>


            <a
              href={produto.linkShopee}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                bg-pink-600
                px-6
                py-3
                text-center
                font-semibold
                text-white
                hover:bg-pink-700
              "
            >
              Comprar na Shopee
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}