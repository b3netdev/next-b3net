"use client";

import { useState } from "react";
import api from "@/api/axios";

export const useFooter = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const getFooterData = async ()=>{
    try{
        const data : any = await api.get('wp-json/custom/v1/menus')
      
        if(data?.status==200 ) return data?.data
        else return []

    }
    catch(error){

    }
  }


  return { getFooterData,loading, error };
};
