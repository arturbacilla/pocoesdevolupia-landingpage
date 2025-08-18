"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
    await fetch('https://handler.send.hotmart.com/subscription/5duwP0b', {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        email: values.email,
        b_5duwP0b:"",
        gdpr: values.gdpr && "Concordo+em+receber+os+e-mails"
      }),
    }).then((result) => result) //[T]todo - alterar para redirect
    .catch((e) => console.error(e)) 


  };
	//
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid grid-cols-5 grid-rows-2 gap-x-1 gap-y-2 w-full"
			>
				<div className="col-span-3">
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
				<div className="relative h-full! w-full! col-span-2 col-start-4 ">
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
				<div className="col-span-5 row-start-2">
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
										<Label className="text-[0.6rem]" htmlFor="gdpr">Concordo em receber os e-mails</Label>
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
