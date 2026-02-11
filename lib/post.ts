// lib/post.ts
import { fetcher } from "@/api/fether";

export async function getPostBySlug(slug: string) {
  console.log(slug,"SLUG")
  return
  
  const data = await fetcher(`custom/v1/content/website-not-generating-leads-how-to-fix-it`, {
    params: { type: "post" },

    revalidate: 60,
  });

  
  return Array.isArray(data) ? data?.[0] ?? null : data ?? null;
}
