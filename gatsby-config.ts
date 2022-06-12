import type { GatsbyConfig } from "gatsby"
const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://zahlenip.de`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        generateMatchPathRewrites: true
      }
    }
  ],
}

export default config
