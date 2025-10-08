import Image from "next/image";
import { Separator } from "../ui/separator";

export default function Recado() {
	return (
		<section className="relative w-full  snap-start! flex flex-col p-[1rem] items-center gap-[1rem]">
			<span className="text-primary! font-bold">Recado da autora</span>
			<div className="relative w-[50vw] md:w-[50vw] lg:w-[30%] min-h-[25vh]! h-[40%]!">
				<Image
					loading="lazy"
					priority={false}
					loader={({ src, width }) =>
						`${process.env.NEXT_PUBLIC_IMG_CDN}/${process.env.NEXT_PUBLIC_APP_HASH}/${src}?w=${width}&f=webp`
					}
					src="authors.png"
					alt="image of author"
					fill
				/>
			</div>
			<div className="relative w-full h-full flex flex-col md:px-[1rem]">
				<p className="text-justify">
					“Esta comunidade juntamente com a jornada Poções de Volúpia nasceu da
					minha própria busca. Somos mulheres maduras, criadas numa época em que
					o desejo era reprimido e calado. Foi nesse processo cheio de dúvidas,
					descobertas, quedas e reencontros que surgiu a vontade de estudar,
					pesquisar e mergulhar no universo da sexualidade feminina madura para
					que pudéssemos ter uma vida sexual feliz e empoderada. E o que
					descobri me transformou. E você pode também descobrir que o desejo é
					normal, não tem idade, que a culpa não precisa morar no corpo, e que o
					prazer pode (e deve) ser vivido em qualquer fase da vida. Esta jornada
					é transformadora. Ela foi criada com carinho, verdade e coragem para
					ser um espaço seguro onde você também possa se redescobrir, empoderar
					sua autoestima sem julgamentos e com muita sensibilidade.”
				</p>
			</div>
			<Separator />
		</section>
	);
}
