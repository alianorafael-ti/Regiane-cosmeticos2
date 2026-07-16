import ProductCard from "./ProductCard";

const produtos = [
  {
    nome: "Natura Kaiak Masculino Desodorante Colônia",
    valor: "R$ 172,90",
    estoque: 1,
    imagem: "/produtos/kaiak-masculino.png",
    linkShopee: "#",
  },
  {
    nome: "Natura Homem Dom Colônia Masculina",
    valor: "R$ 184,90",
    estoque: 3,
    imagem: "/produtos/natura-homem-dom.png",
    linkShopee: "#",
  },
  {
    nome: "Natura Humor a Dois 100ml + Shampoo",
    valor: "R$ 145,00",
    estoque: 1,
    imagem: "/produtos/natura-humor.png",
    linkShopee: "#",
  },
  {
    nome: "Natura Humor Próprio Desodorante Colônia 75ml",
    valor: "R$ 134,90",
    estoque: 1,
    imagem: "/produtos/natura-humor-proprio.png",
    linkShopee: "#",
  },
  {
    nome: "Sabonete Íntimo Bio Instinto 17 Ervas 200ml",
    valor: "R$ 19,90",
    estoque: 5,
    imagem: "/produtos/bio-instinto.png",
    linkShopee: "#",
  },
  {
    nome: "Creme Natura Tododia Macadâmia 400ml",
    valor: "R$ 65,90",
    estoque: 2,
    imagem: "/produtos/tododia-macadamia.png",
    linkShopee: "#",
  },
  {
    nome: "Creme Natura Tododia Flor de Pêra e Melissa 400ml",
    valor: "R$ 65,90",
    estoque: 2,
    imagem: "/produtos/tododia-flor-de-pera.png",
    linkShopee: "#",
  },
  {
    nome: "Sabonete Natura Tododia Toda Noite",
    valor: "R$ 26,90",
    estoque: 4,
    imagem: "/produtos/tododia-toda-noite.png",
    linkShopee: "#",
  },
  {
    nome: "Eudora Siàge Hair Plastia Shampoo + Condicionador",
    valor: "R$ 89,90",
    estoque: 2,
    imagem: "/produtos/siage.png",
    linkShopee: "#",
  },
];

export default function ProductGrid() {
  return (
    <section className="px-6 py-10">

      <h2 className="mb-8 text-center text-3xl font-bold text-pink-700">
        Nossos Produtos
      </h2>

      <div
        className="
          grid
          grid-cols-1
          gap-8
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {produtos.map((produto, index) => (
          <ProductCard
            key={index}
            nome={produto.nome}
            valor={produto.valor}
            estoque={produto.estoque}
            imagem={produto.imagem}
            linkShopee={produto.linkShopee}
          />
        ))}
      </div>

    </section>
  );
}