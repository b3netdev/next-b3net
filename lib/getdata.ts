// lib/post.ts
import { fetcher } from "@/api/fether";
import { WPCategory } from "@/hooks/useBlog";
import { AxiosResponse } from "axios";

export async function GetPageData(slug: string, type?: string) {

 
  const data = await fetcher(`/wp-json/custom/v1/content/${slug}?_embed`, {
    params: type ? { type } : {},
    revalidate: 60,

  });

  return Array.isArray(data) ? data?.[0] ?? null : data ?? null;
}


export async function GetRelatedPost(categoryId: any, id: number | string) {
  
  const data = await fetcher(`/wp-json/wp/v2/posts`, {
    params: {
      categories: categoryId,
      exclude: id,
      per_page: 3,
      page: 1,
    },
    revalidate: 60,

  });

  return Array.isArray(data) ? data ?? null : data ?? null;
}


export async function GetAuthorData(slug: any) {
  const data = await fetcher(`/wp-json/wp/v2/users?slug=${slug}`, {
    revalidate: 60,
  });

  return Array.isArray(data) ? data ?? null : data ?? null;
}



export const getportfoliodetail = async (slug:string) => {

  const data = await fetcher(`/wp-json/custom/v1/content/${slug}?_embed=1`,
    {
      revalidate: 60,
    }
  );

  return data

};


export const getPortFloioRelatedPost = async (categoryId: any, projectId: any) => {

  const data = await fetcher("/wp-json/wp/v2/portfolio", {
    params: {
      categories: categoryId,
      exclude: projectId,
      per_page: 4,
      page: 1,
      _embed: true,
    },
  });
  return Array.isArray(data) ? data ?? null : data ?? null;
};

export const getcaseStudiesData = async (id: number) => {

  const data = await fetcher(`wp-json/custom/v1/page/${id}`,
    {
      revalidate: 60,
    }
  );
  return Array.isArray(data) ? data ?? null : data ?? null;
};



 export const getBlogdetail = async (slug: any) => {
    
  

      const data: any = await fetcher(`/wp-json/wp/v2/posts?slug=${slug}`, {
        params: { _embed: 1 },
      });

      return Array.isArray(data) ? data ?? null : data ?? null;
   
  };




    export const getBlogCategories = async (per_page:number): Promise<any[]> => {
      try {
        const res:any = await fetcher("/wp-json/wp/v2/categories",{
          params:{
            per_page
          }
        });

        console.log(res)
        return res;
      } catch (error) {
        console.error("Failed to fetch header menu:", error);
        throw error;
      }
    };
    export const getCategoryData = async (slug :string): Promise<any[]> => {
      try {
        const res:any = await fetcher(`wp-json/wp/v2/categories?slug=${slug}`,{
          
        });
        return res[0];
      } catch (error) {
        console.error("Failed to fetch header menu:", error);
        throw error;
      }
    };

