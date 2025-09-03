'use client'

import { Header } from "@/components/Header";
import Faq from "@/components/sections/faq";
import Video from "@/components/sections/video";
import { Separator } from "@/components/ui/separator";
import usePreventZoom from "@/hooks/usePreventZoom";

export default function Replay() {
	usePreventZoom();

	return (
		<main className="top-0 w-full h-full">
			<Header />
			<div
				id="sections-box"
				className="flex flex-col mt-[var(--header-height)] lg:mt-[var(--lg-header-height)] md:mt-[var(--md-header-height)] min-h-full! w-[100%]! snap-y! snap-proximity! bg-foreground"
			>
				<Video />
				<Separator />
				<Faq />
			</div>
		</main>
	);
}
