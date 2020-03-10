/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby-Bootstrap",
    description: "This is the description of our website",
    keywords: "gatsby, gatsbyjs project, gatsby bootstrap",
    image: "/static/gatsby.jpg",
    siteUrl: "http://localhost:8000/",
    url: "https://www.gatsbyjs.org/",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    { resolve: `gatsby-transformer-remark` },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `29p.0f3.myftpupload.com`,
        protocol: `https`,
        hostingWPCOM: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS Bootstrap`,
        short_name: `GatsbyJS Bootstrap`,
        start_url: `/`,
        background_color: `#F8F9FA`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-offline`
  ],
}
