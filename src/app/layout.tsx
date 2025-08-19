import type { Metadata, Viewport } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

import { GoogleTagManager } from "@next/third-parties/google";
import posthog from "posthog-js";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const lexend = Lexend({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "LANÇAMENTO - Club Poções de Luxúria",
	description: "O Círculo secreto do prazer feminino após os 50 anos.",
	openGraph: {
		type: "website",
		url: "https://pocoesdevolupia.club",
		images: [{ url: "" }], //TODO - Adicionar imagem
		title: "LANÇAMENTO - Club Poções de Luxúria",
		description: "O Círculo secreto do prazer feminino após os 50 anos.",
		siteName: "LANÇAMENTO - Club Poções de Luxúria",
	},
};
export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

// biome-ignore lint/style/noNonNullAssertion: Recommended usage from posthog doc
posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
	api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
	defaults: "2025-05-24",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className="no-scrollbar lg:w-[var(--lg-width)]! lg:ml-[var(--lg-side-margin)]"
		>
			<body
				className={`${lexend.className} antialiased text-primary-foreground bg-background lg:bg-black select-none`}
			>
				<GoogleTagManager gtmId="GTM-KQDNQP9Z"/>
				{children}
				<Footer />
				<Toaster richColors />
			</body>
		</html>
	);
}
