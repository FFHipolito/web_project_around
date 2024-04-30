// webpack.config.js
const path = require("path"); // conecte o caminho para a configuração do webpack
const HtmlWebpackPlugin = require("html-webpack-plugin"); // conecte o plugin

module.exports = {
  devtool: "inline-source-map",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "main.js",
    publicPath: "",
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"), // especifica uma pasta de onde aplicativo e seu conteúdo será servido
    compress: true, // isso vai agilizar o carregamento do arquivo no modo de desenvolvimento
    port: 8080, // abrirá seu site no localhost:8080 (você pode usar outra porta)
    open: true, // o site abrirá automaticamente no navegador depois de executar npm run dev
    stats: "errors-only", //só gera saída quando os erros acontecem
  },
  module: {
    rules: [
      // esse é um vetor de regras
      // adicione um objeto contendo regras para Babel nele
      {
        // uma expressão regular que busca por todos os arquivos js
        test: /\.js$/,
        // todos os arquivos devem ser processados pelo babel-loader
        loader: "babel-loader",
        // exclua a pasta node_modules, não precisamos processar os arquivos nela
        exclude: "/node_modules/",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // caminho para nosso arquivo index.html
    }),
  ],
};
