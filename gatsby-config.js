module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `TopStories`, // a fixed string
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
        name: `data`
      }
    }
  ]
}
