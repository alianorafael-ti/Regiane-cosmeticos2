export default function Footer() {
  return (
    <footer className="mt-16 bg-pink-700 px-6 py-10 text-white">

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">

        <h2 className="text-2xl font-bold">
          Regiane Cosméticos
        </h2>

        <p className="max-w-md text-sm text-pink-100">
          Produtos Natura e Eudora selecionados com carinho para cuidar da sua beleza e bem-estar.
        </p>


        <a
          href="https://wa.me/5511957333006"
          className="rounded-full bg-white px-6 py-3 font-semibold text-pink-700 transition hover:bg-pink-100"
        >
          Fale conosco pelo WhatsApp
        </a>


        <div className="mt-4 border-t border-pink-500 pt-4 text-sm text-pink-100">

          © {new Date().getFullYear()} Regiane Cosméticos.
          Todos os direitos reservados.

        </div>

      </div>

    </footer>
  );
}