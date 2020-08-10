module.exports = {
  siteMetadata: {
    title: 'Healthy Driveway',
    author: 'Rahul Ravella',
    description: 'dummy content',
    siteUrl: 'healthydriveway.com',
    social: {
        linkedin: 'https://www.linkedin.com/in/faesel-saeed-a97b1614',
        twitter: 'https://twitter.com/@faeselsaeed',
        twitterUsername: '@faeselsaeed',
        github: 'https://github.com/faesel',
        flickr: 'https://www.flickr.com/photos/faesel/',
        email: 'faesel@outlook.com'
    },
    rssFeedUrl: '/rss.xml'
  },
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