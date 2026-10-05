import { useState } from "react";
import { AxiosResponse } from "axios";
import api from "@/api/axios";


export interface WPTitle {
  rendered: string;
}

export interface WPExcerpt {
  rendered: string;
}

export interface WPPost {
  id: number;
  date: string;
  slug?: string;
  title: WPTitle;
  excerpt?: WPExcerpt;
  featured_image_url?: string;
  author?: number;
  categories?: number[];
  // add more fields if you need
}

export interface WPCategory {
  id: number;
  name: string;
  slug?: string;
  count?: number;
}

export interface WPUser {
  id: number;
  name: string;
  slug?: string;
  description?: string;
  avatar_urls?: Record<string, string>;
}

/** Accept either URLSearchParams or a plain object for params */
export type BlogItemsParams =
  | URLSearchParams
  | Record<string, string | number | boolean | undefined | null>;

const useBlog = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const getBlogCategories = async (per_page:number): Promise<WPCategory[]> => {
    try {
      const res: AxiosResponse<WPCategory[]> = await api.get("/wp-json/wp/v2/categories",{
        params:{
          per_page
        }
      });

      return res.data;
    } catch (error) {
      console.error("Failed to fetch header menu:", error);
      throw error;
    }
  };

  const getBlogItems = async (params: any): Promise<any> => {

    setLoading(true);
    try {
      const res: any = await api.get("/wp-json/wp/v2/posts", {
        params: params,
      });
      const totalPosts = Number(res.headers["x-wp-total"] || 0);
      return {
        totalPosts,
        data: res.data,
      };
    } catch (error) {
      console.error("Failed to fetch blog items:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getBlogdetail = async (slug: any) => {
    setLoading(true);
    try {

      const res: any = await api.get(`/wp-json/wp/v2/posts?slug=${slug}`, {
        params: { _embed: 1 },
      });

      return res.data;
    } catch (error) {
      console.error("Failed to fetch blog detail:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getRelatedPosts = async (
    params: any
  ): Promise<any> => {
    setLoading(true);
    try {
      const { categories, author, per_page, page } = params
      const res: any = await api.get("/wp-json/wp/v2/posts", {
        params: {
          author,
          per_page,
          page,
        },
      });
      const totalPosts = Number(res.headers["x-wp-total"] || 0);


      return {
        totalPosts,
        data: res.data,
      };
    } catch (error) {
      console.error("Failed to fetch related posts:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const authorDetails = async (slug: number | string): Promise<WPUser> => {
    setLoading(true);
    try {
      const res: any = await api.get(`/wp-json/wp/v2/users/${slug}`);
      return res.data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const searchBlog = async (searchText: string, pagenumber: string) => {
    setLoading(true)
    try {
      const response = await api.get("/wp-json/custom/v1/blog-search", {
        params: { search: searchText, page: pagenumber, per_page: 6 },
      })
      if (response?.data?.success == true) {
        return {
          totalPosts: response.data.pagination.total_posts,
          data: response.data.data,
        }
      }
      return {
        totalPosts: null,
        data: null,
      }
    }
    catch (error) {
      throw error;
    }
    finally{
      setLoading(false)
    }
  }


  return {
    getBlogCategories,
    getBlogItems,
    loading,
    getBlogdetail,
    getRelatedPosts,
    authorDetails,
    searchBlog
  };
};

export default useBlog;
