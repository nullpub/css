module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-for')(),
    require('postcss-each')(),
    require('postcss-simple-vars')(),
    require('postcss-extend-rule')(),
    require('postcss-cssnext')({
      browsers: ['last 2 versions'],
      features: {
        customProperties: false,
      },
    }),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
};
