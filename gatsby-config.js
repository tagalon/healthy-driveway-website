module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-172924198-1",
        head: true,
        anonymize: true,
        respectDNT: false,
        pageTransitionDelay: 0,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    }
  ]
}