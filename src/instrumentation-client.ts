import posthog from 'posthog-js'

// biome-ignore lint/style/noNonNullAssertion: Recommended usage from posthog doc
posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
	api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
	defaults: "2025-05-24",
});
