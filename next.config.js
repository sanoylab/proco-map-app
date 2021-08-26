//const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");

// module.exports = withSass({
//   cssModules: true,
// })

module.exports = withCSS({
  cssLoaderOptions: {
    url: false,
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
});
