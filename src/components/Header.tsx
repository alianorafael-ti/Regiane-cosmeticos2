"use client";

import { useCarrinho } from "@/context/CartContext";

export default function Header() {
  const { carrinho } = useCarrinho();

  return (
    <header className="relative w-full overflow-hidden">

      <div className="relative w-full">

        <img
          src="/produtos/banner-regiane-cosmeticos.png"
          alt="Regiane Cosméticos"
          className="block h-auto w-full"
        />


        {/* Tarja WhatsApp */}
        <div
          className="
            absolute
            left-0
            top-0
            w-full
            bg-gradient-to-r
            from-pink-500
            to-pink-600
            text-white
            shadow-md
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
              gap-2
              px-2
              py-1
              sm:px-6
              sm:py-4
            "
          >

            <span
              className="
                text-center
                text-[10px]
                font-bold
                uppercase
                leading-tight
                sm:text-base
              "
            >
              ✨ Natura & Eudora pronta entrega!
            </span>


            <div className="flex items-center gap-2">

              <a
                className="
                  whitespace-nowrap
                  rounded-full
                  bg-white/20
                  px-2
                  py-0.5
                  text-[9px]
                  font-bold
                  sm:px-6
                  sm:py-2
                  sm:text-base
                "
              >
                💬 WhatsApp
              </a>


              <button
                className="
                  whitespace-nowrap
                  rounded-full
                  bg-white/20
                  px-2
                  py-0.5
                  text-[9px]
                  font-bold
                  sm:px-6
                  sm:py-2
                  sm:text-base
                "
              >
                🛒 {carrinho.length}
              </button>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}