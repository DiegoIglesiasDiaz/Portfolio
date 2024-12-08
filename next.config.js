const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'diegoiglesiasdiaz.com',
        pathname: '**',
      },
      // Add this pattern for media2.dev.to
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },
};
