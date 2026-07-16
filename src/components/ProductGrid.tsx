import ProductCard from "./ProductCard";
import { produtos } from "@/data/produtos";

export default function ProductGrid() {
  return (
    <section className="px-6 py-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
          💖 Seu momento de autocuidado começa aqui
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Descubra fragrâncias e produtos selecionados para cuidar de você todos
          os dias.
        </p>
      </div>

      <div
        className="
          grid
          grid-cols-1
          gap-8
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {produtos.map((produto) => (
          <ProductCard
            key={produto.id}
            produto={produto}
          />
        ))}
      </div>
    </section>
  );
}