export function getServicePath(slug: string) {
  return `/${slug}`;
}

export function normalizeServicePath(path: string) {
  if (path === "/services") {
    return path;
  }

  return path.startsWith("/services/") ? path.replace(/^\/services/, "") : path;
}
export function normalizeLocationpagePath(path: string) {
  if (path === "/services") {
    return path;
  }

  return path.startsWith("/location-pages/") ? path.replace(/^\/location-pages/, "") : path;
}

export function getBlogPath(slug: string) {
  return `/${slug}`;
}

export function normalizeBlogPath(path: string) {
  if (path === "/blog") return path;
  return path.startsWith("/blog/") ? path.replace(/^\/blog/, "") : path;
}