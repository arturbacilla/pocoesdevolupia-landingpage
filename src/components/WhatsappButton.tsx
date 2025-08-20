"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";

export default function WhatsappButton() {
	return (
		<Button
			variant="outline"
			className="relative bg-[#25d366] font-black overflow-hidden group cursor-pointer border-card text-card"
			size="lg"
			onClick={() => redirect(String(process.env.NEXT_PUBLIC_WHATSAPP_LINK))}
		>
			<span className="absolute inset-0 bg-[#25d366] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000 z-0"></span>
			<span className="relative z-10 group-hover:text-white flex flex-row items-center gap-2">
				<div className="">
					<Image
						src={`${process.env.NEXT_PUBLIC_IMG_CDN}/${process.env.NEXT_PUBLIC_APP_HASH}/whatsapp-icon.svg`}
						alt="whatsapp icon"
						height={32}
						width={32}
					/>
				</div>
				PARTICIPAR DO GRUPO
			</span>
		</Button>
	);
}
