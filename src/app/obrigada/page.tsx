import Image from "next/image";
import WhatsappButton from "@/components/WhatsappButton";

export default function Obrigada() {
	return (
		<main className="w-full md:w-[var(--lg-width)] h-[var(--headerless-content)] flex flex-col justify-evenly p-[1rem] bg-foreground items-center">
			<div className="w-full flex flex-col items-center">
				<div id="logo" className="relative h-[10vh]! w-[25%] md:w-[15%]">
					<Image
						src={`${process.env.NEXT_PUBLIC_IMG_CDN}/${process.env.NEXT_PUBLIC_APP_HASH}/logo.svg`}
						alt="logo"
						fill
					/>
				</div>
				<span className="text-primary! font-black!">
					Poções de Volúpia Club
				</span>
			</div>
			<p className="text-center">
				Obrigado por se cadastrar! Agora faltam apenas dois passos para concluir
				sua inscrição:
			</p>
			<p className="text-center">
				1) clique no botão abaixo para você entrar no grupo de whatsapp onde
				receberá informações atualizadas sobre o clube.
			</p>
			<WhatsappButton />
			<p className="text-center">
				2) ACESSE SEU E-MAIL E RESPONDA A PESQUISA QUE TE ENVIAMOS!
			</p>
			<p className="text-center">
				O objetivo desta pesquisa é conhecer um pouquinho de você para garantir que esse
				clube supere as suas expectativas!
			</p>

			{/* <div className="flex flex-col items-center">
				<span>Nos vemos dia </span>
				<span className="text-primary font-black">
					{process.env.NEXT_PUBLIC_WEBINAR_DATE} !!!
				</span>
			</div> */}
		</main>
	);
}
