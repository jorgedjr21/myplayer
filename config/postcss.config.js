// config/postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: { config: './config/tailwind.config.js' }, // Explicit path
    autoprefixer: {},
  },
};