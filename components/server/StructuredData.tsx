type StructuredDataProps = {
  data: any;
};

const BACKEND = (process.env.NEXT_PUBLIC_BASE_URL || "").replace(/\/$/, "");
const FRONTEND = (process.env.NEXT_PUBLIC_SITE_URL || "https://b3net.com").replace(/\/$/, "");

function isMediaUrl(url: string) {
  return url.includes("/wp-content/");
}

function toFrontendUrl(url?: string) {
  if (!url || typeof url !== "string") return url;
  if (!BACKEND) return url;

  if (isMediaUrl(url)) return url;

  return url
    .replace(BACKEND, FRONTEND)
    .replace(/\.html$/, ""); // optional: remove .html
}


function cleanSchema(data: any): any {
  if (!data) return data;

  if (typeof data === "string") {
    return toFrontendUrl(data);
  }

  if (Array.isArray(data)) {
    return data.map(cleanSchema);
  }

  if (typeof data === "object") {
    const newObj: any = {};

    for (const key in data) {
      const value = data[key];


      if (
        (key === "url" || key === "contentUrl") &&
        typeof value === "string" &&
        isMediaUrl(value)
      ) {
        newObj[key] = value;
      } else {
        newObj[key] = cleanSchema(value);
      }
    }

    return newObj;
  }

  return data;
}

export default function StructuredData({ data }: StructuredDataProps) {
  if (!data) return null;

  const cleanedData = cleanSchema(data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(cleanedData).replace(/</g, "\\u003c"),
      }}
    />
  );
}