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

  const getBlogCategories = async (): Promise<WPCategory[]> => {
    try {
      const res: AxiosResponse<WPCategory[]> = await api.get("/wp-json/wp/v2/categories");
      console.log(res, "BLOG")
      return res.data;
    } catch (error) {
      console.error("Failed to fetch header menu:", error);
      throw error;
    }
  };

  const getBlogItems = async (params: BlogItemsParams): Promise<WPPost[]> => {
    setLoading(true);
    try {
      const axiosParams =
        params instanceof URLSearchParams ? Object.fromEntries(params) : params;

      const res: AxiosResponse<WPPost[]> = await api.get("/wp-json/wp/v2/posts", {
        params: axiosParams,
      });

      return res.data;
    } catch (error) {
      console.error("Failed to fetch blog items:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getBlogdetail = async (slug: string) => {
    setLoading(true);
    try {

      const res: any = await api.get(`/wp-json/custom/v1/content/${slug}`, {
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
    categoryId: number | string,
    id: number | string
  ): Promise<WPPost[]> => {
    setLoading(true);
    try {
      const res: any = await api.get("/wp-json/wp/v2/posts", {
        params: {
          categories: categoryId,
          exclude: id,
          per_page: 3,
          page: 1,
        },
      });

      return res.data;
    } catch (error) {
      console.error("Failed to fetch related posts:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const authorDetails = async (id: number | string): Promise<WPUser> => {
    setLoading(true);
    try {
      const res: AxiosResponse<WPUser> = await api.get(`/wp-json/wp/v2/users/${id}`);
      return res.data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    getBlogCategories,
    getBlogItems,
    loading,
    getBlogdetail,
    getRelatedPosts,
    authorDetails,
  };
};

export default useBlog;
