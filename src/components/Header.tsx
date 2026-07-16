"use client";

import { useState } from "react";
import { useCarrinho } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

export default function Header() {
  const { quantidadeItens } = useCarrinho();

  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  return (
    <>
      <header className="relative w-full overflow-hidden">
        <div className="relative w-full">
          <img
            src="/produtos/banner-regiane-cosmeticos.png"
            alt="Regiane Cosméticos"
            className="block h-auto w-full"
          />

          {/* Tarja */}
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
  href="https://wa.me/5511957333006"
  target="_blank"
  rel="noopener noreferrer"
  className="
    whitespace-nowrap
    rounded-full
    bg-white/20
    px-2
    py-0.5
    text-[9px]
    font-bold
    transition
    hover:bg-white/30
    sm:px-6
    sm:py-2
    sm:text-base
  "
>
  💬 WhatsApp
</a>

                <button
                  onClick={() => setCarrinhoAberto(true)}
                  className="
                    whitespace-nowrap
                    rounded-full
                    bg-white/20
                    px-2
                    py-0.5
                    text-[9px]
                    font-bold
                    transition
                    hover:bg-white/30
                    sm:px-6
                    sm:py-2
                    sm:text-base
                  "
                >
                  🛒 {quantidadeItens}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <CartDrawer
        aberto={carrinhoAberto}
        fechar={() => setCarrinhoAberto(false)}
      />
    </>
  );
}