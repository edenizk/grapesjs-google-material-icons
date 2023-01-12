export default ({ config }) => ({
  ...config,
  output: {
    ...config.output,
    library: 'gjs-google-material-icons',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});