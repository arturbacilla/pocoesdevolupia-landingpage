import Image from "next/image"

export default function Programa() {
  return <section className="relative w-full  snap-start! flex flex-col p-[1rem] items-center gap-[1rem]">
    <div className="flex flex-col gap-1 items-center">
      <span className="font">Palestra Única de Apresentação</span>
      <span className="font-black text-destructive!">100 % GRATUITA - 100% ONLINE</span>
    </div>
    <div className="relative w-[70vw] min-h-[30vh]! h-[40%]!">
      <Image src={`${process.env.NEXT_PUBLIC_IMG_CDN}/${process.env.NEXT_PUBLIC_APP_HASH}/calendar.svg`} alt="calendar with date" fill />
    </div>
    <div className="relative w-full h-full flex flex-col ">
      <span>Nesta palestra única, você vai conhecer o que é o Clube Poções de Volúpia.</span>
      <span>Um jornada de transformação onde você vai conquistar:</span>
      <ol className="list-disc list-inside px-[1rem] flex flex-col gap-2">
        <li>Mais autoconhecimento e confiança em seu corpo;</li>
        <li>Uma visão libertadora sobre o prazer e o sexo após os 50 anos;</li>
        <li>Uma nova forma de viver a intimidade: leve, livre e sem vergonha u culpa;</li>
        <li>Acima de tudo, a certeza de que você merece – e pode – viver uma vida sexual vibrante e plena, mesmo após os 50 anos;</li>
        <li>E o mais importante: vai poder escolher tudo isso com ou sem um parceiro.</li>
      </ol>
    </div>
  </section>
}
