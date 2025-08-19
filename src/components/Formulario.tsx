"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const formSchema = z.object({
	email: z.email("Email inválido"),
	gdpr: z.boolean(),
});

export default function Formulario() {
	const scrollProgress = useScrollProgress() || 0;
	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});

	const {
		formState: { errors },
	} = form;

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const response = await fetch("/api/subscribe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: values.email,
					gdpr: values.gdpr,
				}),
			}).catch((err) => {
				console.error(err);
				return err;
			});

			if (!response.ok || response instanceof Error) {
				toast.error("Aconteceu algum erro, tente novamente mais tarde");
				console.error(response);
			} else {
				toast.success("Pronto");
				router.push("/obrigada");
			}
		} catch (e) {
			console.error("Network or unexpected error:", e);
			// Handle network errors or other unexpected issues
		}
	};
	//
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid grid-cols-5 grid-rows-2 lg:grid-rows-[1fr_auto_1fr] gap-x-1 gap-y-2 w-full"
			>
				<div className="col-span-3 lg:col-start-1 lg:row-start-1">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder="Digite seu e-mail" {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
				</div>
				<div className="relative h-full! w-full! col-span-2 col-start-4 lg:col-start-1 lg:col-span-3 lg:row-start-3">
					<div
						className={`absolute inline-flex h-full! w-full! ${scrollProgress > 70 && "animate-ping"} rounded-full bg-primary opacity-75`}
					/>
					<Button
						type="submit"
						className="relative inline-flex h-full! w-full! "
					>
						INSCREVER
					</Button>
				</div>
				<div className="col-span-5 row-start-2 lg:col-start-1 lg:col-span-3">
					<FormField
						control={form.control}
						name="gdpr"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<div className="flex items-center gap-[0.5rem]">
										<Checkbox
											id="gdpr"
											checked={field.value ?? false}
											onCheckedChange={(checked) => field.onChange(checked)}
											className={`${errors.gdpr && "border-destructive! border-2! animate-pulse"}`}
										/>
										<Label className="text-[0.6rem]" htmlFor="gdpr">
											Concordo em receber os e-mails
										</Label>
									</div>
								</FormControl>
							</FormItem>
						)}
					/>
				</div>
			</form>
		</Form>
	);
}
