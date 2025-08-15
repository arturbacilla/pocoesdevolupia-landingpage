import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "LANÇAMENTO - Club Poções de Luxúria",
	description: "O Círculo secreto do prazer feminino após os 50 anos.",
	openGraph: {
		type: "website",
		url: "https://pocoesdeluxuria.club",
		images: [{ url: "" }], //TODO - Adicionar imagem
		title: "LANÇAMENTO - Club Poções de Luxúria",
		description: "O Círculo secreto do prazer feminino após os 50 anos.",
    siteName: "LANÇAMENTO - Club Poções de Luxúria"
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="no-scrollbar ">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
