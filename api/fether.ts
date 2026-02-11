// lib/fetcher.ts

type FetchOptions = {
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    headers?: HeadersInit;
    body?: any;
    params?: Record<string, string | number | boolean | undefined | null>;
    revalidate?: number; 
    cache?: RequestCache; 
  };
  
  const BASE_URL = process.env.BASE_URL; 
  
  
  if (!BASE_URL) {
    throw new Error("BASE_URL is not defined in environment variables");
  }
  
  export async function fetcher<T = any>(
    endpoint: string,
    options: FetchOptions = {}
  ): Promise<T> {
    const {
      method = "GET",
      headers = {},
      body,
      params,
      revalidate,
      cache,
    } = options;
  
    // Build full URL
    const url = new URL(endpoint.replace(/^\//, ""), BASE_URL);
  
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          url.searchParams.append(key, String(value));
        }
      });
    }
  
    const response = await fetch(url.toString(), {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      next: revalidate ? { revalidate } : undefined,
      cache: cache ?? undefined,
    });
  
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Fetch error ${response.status}: ${response.statusText} - ${errorText}`
      );
    }
  
    return response.json();
  }
  