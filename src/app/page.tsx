"use client";

import { Header } from "@/components/Header";

export default function Home() {
	return (
		<main className="top-0 w-full min-h-screen">
			<Header />
			<div
				id="sections-box"
				className="flex flex-col mt-[var(--header-size)] min-h-full! w-[100%]! "
				style={{
					scrollMargin: "125%"
				}}
			>
				{
					["red", "blue", "amber-500", "cyan", "magenta"].map((item) => 
						<div key={item} className="w-full h-[var(--content-size)]!" style={{
							backgroundColor: item
						}}>
							{item}
						</div>
					)
				}
			</div>
		</main>
	);
}
