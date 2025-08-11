import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

interface Args {
  mode: "production" | "development";
}

const config = (_: void, argv: Args): Configuration => {
  const devMode = argv.mode !== "production";

  return {
    entry: [path.resolve(__dirname, "src", "index.tsx")],
    mode: devMode ? "development" : "production",
    module: {
      rules: [
        {
          test: /\.tsx?$/i,
          exclude: /(node_modules)/,
          loader: "ts-loader",
        },
        {
          test: /\.scss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "@teamsupercell/typings-for-css-modules-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: {
                  namedExport: false,
                  exportLocalsConvention: "camel-case-only",
                },
              },
            },
            "sass-loader",
          ],
          include: /\.module\.scss$/,
        },
        {
          test: /\.scss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "@teamsupercell/typings-for-css-modules-loader",
            {
              loader: "css-loader",
              options: {
                modules: false,
              },
            },
            "sass-loader",
          ],
          exclude: /\.module\.scss$/,
        },
        {
          test: /\.(png)$/i,
          type: "asset/resource",
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        "~": path.resolve(__dirname, "src"),
      },
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
      filename: "[contenthash].js",
      assetModuleFilename: "images/[contenthash][ext]",
    },
    devServer: {
      historyApiFallback: true,
      port: 3000,
      watchFiles: ["src/**/*"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "templates", "index.ejs"),
        devMode,
      }),
      new MiniCssExtractPlugin({
        filename: "[contenthash].css",
      }),
    ],
  };
};

export default config;
