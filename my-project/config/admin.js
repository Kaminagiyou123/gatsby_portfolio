module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '148b9df0ec694a0fd9e5d233c574d51f'),
  },
});
