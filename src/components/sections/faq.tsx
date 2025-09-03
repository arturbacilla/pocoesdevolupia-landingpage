import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion";

interface IFaq {
	question: string;
	answer: string;
}

const faq: IFaq[] = [
	{
		question: "Quantas vezes posso assistir o conteúdo do clube?",
		answer:
			"O conteúdo porderá ser reassistido quantas vezes você quiser durante o período de vigência.",
	},
	{
		question: "Até quando terei acesso ao conteúdo? (Período de vigência)",
		answer:
			"Você terá 12 meses de acesso para ver todo o conteúdo (contos, palestras, etc...)",
	},
	{
		question: "Posso comprar e dividir o acesso com minhas amigas?",
		answer:
			"Não, o acesso ao clube é individual. Não pode haver acesso simultâneo e seus dados estarão vinculados ao conteúdo, assim podemos identificar possíveis compartilhamentos indevidos.",
	},
	{
		question: "O valor pode ser parcelado?",
		answer: "Sim, em até 12x no cartão.",
	},
	{
		question: "Receberei nota fiscal?",
		answer: "Sim, você a receberá por email na hora da compra.",
	},
	{
		question: "Onde posso assistir esse conteúdo?",
		answer:
			"Você pode assistir em qualquer dispositivo com internet como celulares, tablets e computadores.",
	},
	{
		question: "Posso desistir da compra?",
		answer:
			"Sim, temos uma garantia de 7 dias, basta mandar um e-mail que nós devolveremos todo o valor pago, sem justificativas nem burocracias.",
	},
];

export default function Faq() {
	return (
		<section className="relative w-full  snap-start! flex flex-col p-[1rem] items-center gap-[1rem]">
      <h2 className="font-bold">FAQ - Perguntas frequentes</h2>
			<Accordion type="multiple" className="w-full px-[1rem]">
				{faq.map((item, index) => (
					<AccordionItem key={item.question} value={`item-${index}`}>
						<AccordionTrigger className="font-bold">{item.question}</AccordionTrigger>
						<AccordionContent>{item.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
}
