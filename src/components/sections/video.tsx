import { YouTubeEmbed } from "@next/third-parties/google";
import useWidth from "@/hooks/useWidth";

export default function Video() {
	const screenWidth = useWidth();

	return (
		<section className="flex flex-col text-center items-center gap-[1rem] m-[1rem]">
			Caso você não tenha visto a live de apresentação, você pode rever ela
			aqui!
			<YouTubeEmbed
			/** biome-ignore lint/style/noNonNullAssertion: The env variable must be defined, so can't be empty */
				videoid={process.env.NEXT_PUBLIC_YOUTUBE_WEBINAR1_ID!}
				width={screenWidth > 1020 ? 720 : screenWidth * 0.9}
			/>
			Se interessou pelo clube? Cadastre-se acima para receber mais informações
			por email!
		</section>
	);
}
