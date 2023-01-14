export default ({ config }) => ({
  ...config,
  output: {
    ...config.output,
    library: 'gjs-google-material-icons',
  },
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});