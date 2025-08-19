"use client";

import { Header } from "@/components/Header";
import Entregaveis from "@/components/sections/entregaveis";
import Programa from "@/components/sections/programa";
import Recado from "@/components/sections/recado";
import usePreventZoom from "@/hooks/usePreventZoom";

export default function Lancamento() {
  usePreventZoom()
  return (
    <main className="top-0 w-full h-full">
      <Header />
      <div
        id="sections-box"
        className="flex flex-col mt-[var(--header-height)] lg:mt-[var(--lg-header-height)] md:mt-[var(--md-header-height)] min-h-full! w-[100%]! snap-y! snap-proximity! bg-foreground"
      >
        <Programa/>
        <Entregaveis />
        <Recado />
      </div>
    </main>
  );
}
