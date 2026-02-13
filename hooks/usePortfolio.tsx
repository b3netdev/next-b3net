import React, { useState } from "react";
import api from "@/api/axios";

const usePortfolio = () => {
    const [loading, setLoading] = useState(false);
    const [categoryLoading, setCategoryLoading] = useState(false);

    const getportfolioCategories = async () => {
        setCategoryLoading(true);
        try {
            const res = await api.get("/wp-json/wp/v2/portfolio_category");
            return res.data;
        } catch (error) {
            console.error("Failed to fetch blog categories:", error);
            throw error;
        } finally {
            setCategoryLoading(false);
        }
    };

    const getportfolioItems = async (params: any) => {
        setLoading(true);
        try {
            const res = await api.get("/wp-json/wp/v2/portfolio", {
                params: Object.fromEntries(params),
            });
            return res.data;
        } catch (error) {
            console.error("Failed to fetch blog items:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const getportfoliodetail = async (id: any) => {
        setLoading(true);
        try {
            const res = await api.get(`/wp-json/wp/v2/portfolio/${id}`);
            return res.data;
        } catch (error) {
            console.error("Failed to fetch blog detail:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const getRelatedProjects = async (categoryId: string, projectId: string) => {
        setLoading(true);
        try {
            const res = await api.get("/wp-json/wp/v2/portfolio", {
                params: {
                    categories: categoryId,
                    exclude: projectId,
                    per_page: 4,
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

    return {
        getportfolioCategories,
        getportfolioItems,
        loading,
        getportfoliodetail,
        getRelatedProjects,
    };
};

export default usePortfolio;
