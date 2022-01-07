module.exports = {
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
  },
  async rewrites(){
    return [
      {
        source: '/about-us', 
        destination: '/sample/rewrites/about',
      },
      {
        source: '/sample/rewrites/external',
        destination: 'https://www.google.com',
      },
  ]
  },
  async redirects() {
    return [
      {
        source: '/sample/redirects/google',
        destination: 'https://www.google.com',
        permanent: true,
      },
      {
        source: '/sample/redirects/root',
        destination: '/',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/sample/headers',
        headers: [
          {
            key: 'x-custom-header',
            value: 'ini headernya customlho',
          },
          {
            key: 'x-another-custom-header',
            value: 'yss lambada',
          },
        ],
      },
    ]
  },
}