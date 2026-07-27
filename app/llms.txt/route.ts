import { BASE_URL } from "@/lib/url";

const LLMS_API_URL =
  `${BASE_URL}/wp-json/custom/v1/llms`;

export async function GET() {
  try {
    const response = await fetch(LLMS_API_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`API returned status ${response.status}`);
    }

    const data = await response.json();

    if (data.action !== "success" || !data.content) {
      return new Response("LLMS content is unavailable.", {
        status: 502,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
        },
      });
    }

    // Remove BOM character returned by WordPress
    const content = data.content.replace(/^\uFEFF/, "");

    return new Response(content, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control":
          "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Failed to load llms.txt:", error);

    return new Response("Unable to load llms.txt.", {
      status: 502,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}