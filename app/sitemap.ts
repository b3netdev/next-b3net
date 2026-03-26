import { MetadataRoute } from 'next';
import { fetcher } from '@/api/fether';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ;

// Fetch all blog posts
async function getAllBlogPosts() {
  try {
    const posts = await fetcher('/wp-json/wp/v2/posts', {
      params: {
        per_page: 100,
        page: 1,
        _fields: 'slug,modified',
      },
      revalidate: 3600, // Cache for 1 hour
    });
    return Array.isArray(posts) ? posts : [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Fetch all portfolio items
async function getAllPortfolio() {
  try {
    const portfolio = await fetcher('/wp-json/wp/v2/portfolio', {
      params: {
        per_page: 100,
        page: 1,
        _fields: 'slug,modified',
      },
      revalidate: 3600,
    });
    return Array.isArray(portfolio) ? portfolio : [];
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    return [];
  }
}

// Fetch all services
async function getAllServices() {
  try {
    const services = await fetcher('/wp-json/wp/v2/services', {
      params: {
        per_page: 100,
        page: 1,
        _fields: 'slug,modified',
      },
      revalidate: 3600,
    });
    return Array.isArray(services) ? services : [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

// Fetch all case studies
async function getAllCaseStudies() {
  try {
    const caseStudies = await fetcher('/wp-json/wp/v2/case-study', {
      params: {
        per_page: 100,
        page: 1,
        _fields: 'slug,modified',
      },
      revalidate: 3600,
    });
    return Array.isArray(caseStudies) ? caseStudies : [];
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
}

// Fetch all authors
async function getAllAuthors() {
  try {
    const authors = await fetcher('/wp-json/wp/v2/users', {
      params: {
        per_page: 100,
        _fields: 'slug',
      },
      revalidate: 3600,
    });
    return Array.isArray(authors) ? authors : [];
  } catch (error) {
    console.error('Error fetching authors:', error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all dynamic content in parallel
  const [blogPosts, portfolio, services, caseStudies, authors] = await Promise.all([
    getAllBlogPosts(),
    getAllPortfolio(),
    getAllServices(),
    getAllCaseStudies(),
    getAllAuthors(),
  ]);

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/home`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about-company`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about-company/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/about-company/featured-clients`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/about-company/testimonial`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/services/ai-integration`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services/ai-video`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Dynamic blog posts
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post: any) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.modified ? new Date(post.modified) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Dynamic portfolio items
  const portfolioEntries: MetadataRoute.Sitemap = portfolio.map((item: any) => ({
    url: `${siteUrl}/portfolio/${item.slug}`,
    lastModified: item.modified ? new Date(item.modified) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic services
  const serviceEntries: MetadataRoute.Sitemap = services.map((service: any) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: service.modified ? new Date(service.modified) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic case studies
  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((study: any) => ({
    url: `${siteUrl}/casestudy/${study.slug}`,
    lastModified: study.modified ? new Date(study.modified) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic author pages
  const authorEntries: MetadataRoute.Sitemap = authors.map((author: any) => ({
    url: `${siteUrl}/author/${author.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...blogEntries,
    ...portfolioEntries,
    ...serviceEntries,
    ...caseStudyEntries,
    ...authorEntries,
  ];
}
