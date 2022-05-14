module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3ed635241cdb2df5e256388e0bcc2310'),
  },
});
