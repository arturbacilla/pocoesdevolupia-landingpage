import Image from "next/image"
import { Separator } from "../ui/separator"

export default function Recado() {
  return <section className="relative w-full  snap-start! flex flex-col p-[1rem] items-center gap-[1rem]">
    <span className="text-secondary! font-bold">Recado das autoras</span>
    <div className="relative w-[85vw] md:w-[50vw] lg:w-[40%] min-h-[25vh]! h-[40%]! ">
      <Image loading="lazy" priority={false} loader={({src, width}) => `${process.env.NEXT_PUBLIC_IMG_CDN}/${process.env.NEXT_PUBLIC_APP_HASH}/${src}?w=${width}&f=webp`} src="exp-lurdinha.png" alt="image of lurdinha" fill />
    </div>
    <div className="relative w-full h-full flex flex-col md:px-[1rem]">
      <p className="text-justify">“Este conteúdo nasceu da nossa própria busca. 
        Somos mulheres maduras, como você. 
        Fomos criadas numa época em que a mulher era reprimida e calada. E por muito tempo, a culpa e o medo nos acompanharam.
        Foi nesse processo – cheio de dúvidas, descobertas, quedas e reencontros – que surgiu a vontade de estudar, pesquisar e mergulhar no universo da sexualidade feminina madura. E o que descobrimos nos transformou.
        Descobrimos que o desejo não tem idade, que a culpa não precisa morar no corpo, e que o prazer pode (e deve) ser vivido em qualquer fase da vida.
        Este círculo do prazer é o reflexo dessa jornada. Ele foi criado com carinho, verdade e coragem – para ser um espaço seguro onde você também possa se redescobrir, sem julgamentos.”</p>
    </div>
    <Separator />
  </section>
}
