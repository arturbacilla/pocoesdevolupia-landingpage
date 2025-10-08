import Image from "next/image";
import { Separator } from "../ui/separator";

export default function Convite() {
	return (
		<section className="relative w-full  snap-start! flex flex-col p-[1rem] items-center gap-[1rem]">
			<div className="relative w-full h-full flex flex-col md:px-[1rem]">
				<p className="text-center">
					Venha participar da nossa jornada! Uma comunidade exclusivamente para
					mulheres acima de 50 anos! Venham compartilhar suas histórias, suas
					peripécias da vida sexual, suas dúvidas, seus entraves, seus encontros
					e desencontros. Aqui vai poder expor seus desejos mais secretos e esta
					liberdade será recebida sem críticas ou reprovação. Aqui a sua auto
					estima e a sua volúpia irão florescer! Aqui no clube vocês também vão
					receber contos eróticos, receitas afrodisíacas e dicas sensuais.
				</p>
			</div>
			<Separator />
		</section>
	);
}
