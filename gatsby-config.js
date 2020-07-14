/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: `Android Dev BR | Resultados da pesquisa de mercado`,
    description: `
    Com o intuito de entender melhor a nossa comunidade e melhorar nossas iniciativas, desenvolvemos esta pesquisa para  avaliar o cenário dos desenvolvedores Android brasileiros no mercado de trabalho (salário, beneficios, regime de contratação etc). `,
    author: {
      name: 'Android Dev BR',
      content: 'Uma comunidade para pessoas desenvolvedoras de Android de todo o Brasil.',
    },
    social: {
      github: 'https://github.com/androiddevbr',
      twitter: 'https://twitter.com/AndroidDevBrOrg',
      slack: 'http://slack.androiddevbr.org/'
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
        // Puts script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `adbr-survey-results`,
        short_name: `adbr-survey`,
        start_url: `/`,
        background_color: `#4caf4f`,
        theme_color: `#4caf4f`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
