import type React from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";


export const Header: React.FC = () => {
	const _scrollProgress = useScrollProgress() || 0;

	return (
		<header
			className="fixed top-0 left-0 w-full h-[var(--header-size)] z-50 bg-background/100 backdrop-blur-md border-[1px] border-b border-solid border-black"
		>
			<div className="grid grid-cols-2 grid-rows-2 gap-1">
				{/* Left side - H1/H2 content */}
				<div className="flex-1">
					<h1 className="text-2xl font-bold gradient-text">
						Poções de Volúpia
					</h1>
					<h3 className="text-sm text-muted-foreground">
						O CÍRCULO SECRETO DO PRAZER FEMININO APÓS OS 50 ANOS
					</h3>
				</div>

				{/* Center - SVG Box placeholder */}
				<div className="flex-shrink-0 mx-8">
					<div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow"></div>
				</div>

				{/* Right side - Regular box */}
				<div className="col-span-2 row-start-2">
					<div className="px-6 py-2 bg-surface border border-border rounded-lg shadow-glow hover:shadow-glow-strong transition-all duration-300">
						<span className="text-sm font-medium">
							Aqui vai o email e o botão de cadastro{" "}
						</span>
					</div>
				</div>
			</div>
		</header>
	);
};
