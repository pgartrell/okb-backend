module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd84c086798a50f14047677b917753ce1'),
  },
});
