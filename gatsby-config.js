/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "WebDev Portfolio",
    description: "WebDev Portfolio",
    titleTemplate: `%s | WebDev Portfolio`,
    url: `https://gatsby-portfolio-123.netlify.app`,
    twitterUsername: "",
    image: "",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,

    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337/api",
        collectionTypes: ["job", "project"],
        singleTypes: [`about`],
        queryLimit: 1000,
      },
    },
  ],
}
