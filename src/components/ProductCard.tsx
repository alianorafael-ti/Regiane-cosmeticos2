import Image from "next/image";

interface ProductCardProps {
  nome: string;
  valor: string;
  estoque: number;
  imagem: string;
  linkShopee: string;
}

export default function ProductCard({
  nome,
  valor,
  estoque,
  imagem,
  linkShopee,
}: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:scale-105 hover:shadow-xl">

      <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
        <Image
          src={imagem}
          alt={nome}
          width={250}
          height={250}
          className="h-full w-full object-contain"
        />
      </div>


      <div className="flex flex-col gap-3 p-5">

        <h3 className="min-h-14 text-lg font-semibold text-gray-800">
          {nome}
        </h3>


        <p className="text-2xl font-bold text-pink-700">
          {valor}
        </p>


        <p className="text-sm text-gray-600">
          Estoque disponível:{" "}
          <span className="font-semibold text-green-600">
            {estoque}
          </span>
        </p>


        <a
          href={linkShopee}
          target="_blank"
          className="mt-3 rounded-full bg-pink-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-pink-700"
        >
          Comprar na Shopee
        </a>

      </div>

    </article>
  );
}