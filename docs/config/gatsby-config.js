module.exports = {
  pathPrefix: "/execution-apis",
  siteMetadata: {
    title: 'Ethereum JSON-RPC Specification',
    description: 'A specification of the standard interface for Ethereum clients.',
    siteUrl: 'https://open-rpc.org',
    logoUrl: 'https://raw.githubusercontent.com/open-rpc/design/master/icons/open-rpc-logo-noText/open-rpc-logo-noText%20(PNG)/256x256.png',
    primaryColor: '#3f51b5', //material-ui primary color
    secondaryColor: '#f50057', //material-ui secondary color
    author: '',
    menuLinks: [      {
        name: 'Contributors Guide',
        link: '/making-changes',
        ignoreNextPrev: true
      },
      {
        name: 'API Documentation',
        link: '/api-documentation'
      }
    ],
    footerLinks: [
      {
        name: 'OpenRPC',
        link: 'https://open-rpc.org'
      }
    ]
  },
  plugins: [
   {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: false,
            },
          },
        ],
      },
    },
    "gatsby-openrpc-theme",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'pristine-site',
        short_name: 'pristine-site',
        start_url: '/',
        background_color: 'transparent',
        theme_color: '#3f51b5',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: __dirname + '/src/images',
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: __dirname + '/src/docs',
      },
    },
  ],
}
