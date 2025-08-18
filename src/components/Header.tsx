import type React from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Image from "next/image";


export const Header: React.FC = () => {
	const _scrollProgress = useScrollProgress() || 0;

	return (
		<header
			className="fixed top-0 left-0 lg:ml-[10%] w-full h-[var(--header-height)] z-50 bg-background/100 flex flex-row shadow-sm shadow-card items-end"
		>
			<div id="header-text" className="absolute h-full w-[100%] flex flex-col justify-evenly px-[1rem]">
				<h1 className="text-primary! font-black text-[100%] text-center w-full">
					TENHA UMA VIDA SEXUAL PRAZEROSA E SEM CULPA DEPOIS DOS 50 ANOS.
				</h1>
				<div className="flex flex-col max-w-[75%] gap-[0.5rem] text-[80%]!">
					<span>POÇÕES DE VOLÚPIA - O Círculo do Prazer Feminino 50+</span>
					<h2>Uma jornada e um clube secreto  EXCLUSIVO para mulheres que desejam se reconectar com o prazer, e querem viver a sexualidade com sensualidade junto a cumplicidade de outras mulheres.</h2>
				</div>
				<div id="sign-in-form" className="h-[20%] w-full bg-amber-300">
					Formulário aqui
				</div>
			</div>
			<div id="header-image" className="fixed z-[-1] right-[-20%] h-[var(--header-img-size)] w-[var(--header-img-size)] justify-end opacity-50">
				<Image src={`${process.env.NEXT_PUBLIC_IMG_CDN}/${process.env.NEXT_PUBLIC_APP_HASH}/lurdinha-style-final.svg`} alt="stylish image" fill/>
			</div>
		</header>
	);
};
