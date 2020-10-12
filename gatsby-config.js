module.exports = {
  siteMetadata: {
    title: "Ritzy Studios",
    author: "Daniel Monk",
    description: "Ritzy studios is a creative hair / photography studio in the heart of Peterborough. Our studio Goal is to create & express through our work to show the public what we have to offer."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/ritzy-r-no-text.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
