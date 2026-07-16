export default function Header() {
  return (
    <header className="w-full relative overflow-hidden">

      {/* Banner */}
      <div className="w-full relative">
        <img
          src="/produtos/banner-regiane-cosmeticos.png"
          alt="Regiane Cosméticos"
          className="w-full h-auto block"
        />

        {/* Tarja sobre o banner */}
        <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">

            <span className="uppercase text-center sm:text-left font-bold tracking-wide">
              ✨ Novidades Natura & Eudora com pronta entrega!
            </span>

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white hover:text-pink-600 px-6 py-2 rounded-full font-bold transition"
            >
              💬 Fale Conosco no WhatsApp
            </a>

          </div>
        </div>

      </div>

    </header>
  );
}