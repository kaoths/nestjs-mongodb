export default () => ({
  node_env: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10) || 3000,
  db: {
    mongo_url: process.env.MONGO_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
});
