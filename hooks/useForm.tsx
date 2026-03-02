"use client";

import { useState } from "react";
import api from "@/api/axios";

export const useForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const submitcontact = async (payload:any, id:any) => {
    setLoading(true);
    setError(null);

    try {
      
      const res = await api.post(`wp-json/contact-form-7/v1/contact-forms/${id}/feedback`, payload,
        {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }

      );
      return res.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { submitcontact, loading, error };
};
