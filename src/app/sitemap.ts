import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://achieversedugroup.com';

  const routes = [
    '',
    '/about',
    '/campuses',
    '/campuses/achievers-world-school-manmad',
    '/campuses/achievers-iit-medical-chandwad',
    '/campuses/wisdom-international-school-niphad',
    '/programs',
    '/programs/pre-primary',
    '/programs/primary-secondary',
    '/programs/higher-secondary',
    '/programs/competitive-exams',
    '/facilities/hostel',
    '/facilities/transport',
    '/results',
    '/accreditations',
    '/admission',
    '/gallery',
    '/contact'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/campuses') ? 0.9 : 0.8,
  }));
}

