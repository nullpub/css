module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-for')(),
    require('postcss-each')(),
    require('postcss-simple-vars')(),
    require('postcss-cssnext')({
      browsers: ['last 2 versions'],
      features: {
        customProperties: false,
      },
    }),
    require('postcss-style-guide')({
      project: 'nll css',
      dest: 'docs/index.html',
      showCode: false,
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
