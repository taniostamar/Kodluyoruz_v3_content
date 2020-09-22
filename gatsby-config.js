module.exports = {
  siteMetadata: {
    siteTitle: `Rocket Docs`,
    defaultTitle: `Kodluyoruz v3`,
    siteTitleShort: `Kodluyoruz v3`,
    siteDescription: `Burası eğitimde mucizelerin olacağı yer!`,
    siteUrl: `https://v3content.netlify.app/`,
    siteAuthor: `@kodluyoruz`,
    siteImage: `/yatay logo.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/taniostamar/Kodluyoruz_v3_content`,
        baseDir: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alchemy v3`,
        short_name: `Alchemy v3`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://v3content.netlify.app/`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
