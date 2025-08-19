"use client";

import Image from "next/image";
import type React from "react";
import Formulario from "./Formulario";

export const Header: React.FC = () => {

	return (
		<header className="fixed top-0 left-0 w-full lg:w-[var(--lg-width)] lg:ml-[var(--lg-side-margin)] h-[var(--header-height)] md:h-[var(--md-header-height)] lg:h-[var(--lg-header-height)] z-50 bg-background/100 flex flex-row border-b-1 border-b-card items-end">
			<div
				id="header-text"
				className="absolute h-full w-[100%] flex flex-col justify-evenly md:justify-start md:gap-[1rem] px-[1rem] md:py-[1rem]"
			>
				<h1 className="text-primary! font-black text-[100%] md:text-[175%] text-center w-full lg:w-[70%]">
					TENHA UMA VIDA SEXUAL PRAZEROSA E SEM CULPA DEPOIS DOS 50 ANOS.
				</h1>
				<div className="flex flex-col max-w-[75%] lg:max-w-[60%] text-justify gap-[0.5rem] text-[80%]! md:text-[100%]!">
					<span>POÇÕES DE VOLÚPIA - O Círculo do Prazer Feminino 50+</span>
					<h2>
						Uma jornada e um clube secreto EXCLUSIVO para mulheres que desejam
						se reconectar com o prazer, e querem viver a sexualidade com
						sensualidade junto a cumplicidade de outras mulheres.
					</h2>
				</div>
				<div
					id="sign-in-form"
					className={`h-[20%] w-full `}
				>
					<Formulario />
				</div>
			</div>
			<div
				id="header-image"
				className="fixed z-[-1] right-[-20%] md:right-[-10%] lg:right-[var(--lg-side-margin)] h-[var(--header-img-size)] w-[var(--header-img-size)] lg:h-[var(--lg-header-height)] lg:w-[var(--lg-header-height)] justify-end opacity-50 md:opacity-100"
			>
				<Image
					src={`${process.env.NEXT_PUBLIC_IMG_CDN}/${process.env.NEXT_PUBLIC_APP_HASH}/lurdinha-style-final.svg`}
					alt="stylish image"
					fill
				/>
			</div>
		</header>
	);
};
