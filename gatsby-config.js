/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Sathvik Aithala | Business & Data Analyst`,
    siteUrl: `https://www.sathvikaithala.com`,
    description: `Business and data analyst with a passion for helping businesses explore, utilize, and visualize their data to drive decisions.`,
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `timeline`,
        path: `${__dirname}/assets/timeline/`,
        ignore: [`**/\.*`],
      },
    },
  ],
}
