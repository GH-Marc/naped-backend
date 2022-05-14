module.exports = [
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          "connect-src": ["'self'", "https:"],
          "script-src": ["'self'", "editor.unlayer.com"],
          "frame-src": ["'self'", "editor.unlayer.com"],
          "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "res.cloudinary.com",
            "cdn.jsdelivr.net",
            "strapi.io",
            "s3.amazonaws.com",
            "dl.airtable.com"
          ],
        },
      }
    },
  },
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
