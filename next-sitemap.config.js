/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.zarephathnigeria.com', 
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/admin/*', '/private/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/admin', '/private'],
      },
    ],
  },
};
