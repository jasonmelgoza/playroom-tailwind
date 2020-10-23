const path = require('path');

module.exports = {
  components: './components',
  outputPath: './build',
  snippets: './playroom/snippets.js',
  frameComponent: './playroom/FrameComponent.js',
  title: 'Tailwind',
  baseUrl: '/',
  exampleCode: `
  <Box className='p-4 text-xl text-white bg-gray-900'>
    Hello World!
  </Box>
`,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.(woff(2)?|ttf|eot|svg|jpg|png)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          include: [
            path.resolve(__dirname, './components'),
            path.resolve(__dirname, './styles'),
          ],
          exclude: /node_modules/,
          use: [
            require.resolve('style-loader'),
            require.resolve('css-loader'),
            {
              loader: require.resolve('postcss-loader'),
              options: {
                postcssOptions: {
                  plugins: [
                    require.resolve('tailwindcss'),
                    require.resolve('autoprefixer'),
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.js$/,
          include: __dirname,
          exclude: /node_modules/,
          use: {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                require.resolve('@babel/preset-env'),
                require.resolve('@babel/preset-react'),
              ],
              plugins: [
                require.resolve('@babel/plugin-proposal-class-properties'),
              ],
            },
          },
        },
      ],
    },
  }),
};
