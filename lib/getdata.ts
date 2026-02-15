// lib/post.ts
import { fetcher } from "@/api/fether";

export async function GetPageData(slug: string, type: string) {

  const data = await fetcher(`/wp-json/custom/v1/content/${slug}?_embed`, {
    params: { type: type },
    revalidate: 60,

  });




  return Array.isArray(data) ? data?.[0] ?? null : data ?? null;
}


export async function GetRelatedPost(categoryId: any, id: number) {
  //console.log(categoryId,"CATEGORY_ID")
  const data = await fetcher(`/wp-json/wp/v2/posts`, {
    params: {
      categories: categoryId,
      exclude: id,
      per_page: 3,
      page: 1,
    },
    revalidate: 60,

  });
  // console.log(data,'tesrttt');
  return Array.isArray(data) ? data ?? null : data ?? null;
}


export async function GetAuthorData(slug: any) {
  //console.log(categoryId,"CATEGORY_ID")
  const data = await fetcher(`/wp-json/wp/v2/users/${slug}`, {
    revalidate: 60,
  });
  // console.log(data,'tesrttt');
  return Array.isArray(data) ? data ?? null : data ?? null;
}
