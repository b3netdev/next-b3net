"use client";

import { useCallback, useState } from "react";
import api from "@/api/axios";

export const useFooter = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const getFooterData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response: any = await api.get("wp-json/custom/v1/menus");

      if (response?.status === 200) {
        return response?.data;
      }

      return [];
    } catch (err) {
      setError(err);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  return { getFooterData, loading, error };
};