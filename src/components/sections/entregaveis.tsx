import type { ReactElement } from "react"
import { Separator } from "../ui/separator"
import Image from "next/image"
import { FileHeart } from "lucide-react"

interface IEntregaveis {
  id: string,
  icon: ReactElement,
  title: string,
  description: string
}

const entregaveis: IEntregaveis[] = [
  {
    id: "whatsapp",
    icon: <Image src={`${process.env.NEXT_PUBLIC_IMG_CDN}/${process.env.NEXT_PUBLIC_APP_HASH}/whatsapp-icon.svg`} alt="whatsapp icon" fill />,
    title: "Grupo no WhatsApp",
    description: "Você vai ter acesso a um grupo exclusivo no Whatsapp. Lá você vai receber todas as atividades e informações de acesso do Poções de Volúpia!"
  },
  {
    id: "conto",
    icon: <FileHeart size="2.5rem" strokeWidth={2} color="#000000" />,
    title: "Um Conto Erótico",
    description: "Você receberá por email um conto erótico para ter uma amostra do que está por vir quando você se juntar ao clube!"
  }
]

export default function Entregaveis() {
  return <section className="relative w-full  snap-start! flex flex-col px-[1rem] items-center gap-[1rem]">
    <span className="text-secondary! font-bold">Entregáveis do Evento</span>
    <div className="relative w-full h-full flex flex-col ">
      <ol className="relative flex flex-col gap-[1rem]">
        {entregaveis.map((item) => (
          <div key={item.id} id={`${item.id}-listitem`} className="w-full flex flex-row items-center gap-[1rem]">
            <div className="relative w-[15vw]! min-w-[15vw] h-[15vw] rounded-[50%]! object-cover bg-secondary flex items-center justify-center">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-primary!">{item.title}</span>
              <span className="text-card! text-[60%]!">{item.description}</span>
            </div>
          </div>
        ))
        }
      </ol>
    </div>
    <Separator />
  </section>
}
