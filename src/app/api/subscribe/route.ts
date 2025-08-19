import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
	try {
    const {email} = await req.json()
		const formData = new FormData();

		formData.append("email", email);
		formData.append("b_5duwP0b", "");
		formData.append("gdpr", "Concordo+em+receber+os+e-mails");

		const result = await fetch(
			"https://handler.send.hotmart.com/subscription/5duwP0b",
			{
				method: "POST",
				headers: {
					Accept: "application/json, text/plain, */*",
				},
				body: formData,
			},
		)

    console.log(result)

    return new Response(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json' },
    })

	} catch (error) {
		console.error("Proxy Error:", error);
		return new Response("Internal server error", {
      status: 500
    })
	}
}
