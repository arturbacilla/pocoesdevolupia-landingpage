"use client";

import { Header } from "@/components/Header";
import Programa from "@/components/sections/programa";

export default function Lancamento() {
  return (
    <main className="top-0 w-full h-full">
      <Header />
      <div
        id="sections-box"
        className="flex flex-col mt-[var(--header-height)] min-h-full! w-[100%]! snap-y! snap-proximity!"
      >
        <Programa/>
      </div>
    </main>
  );
}
