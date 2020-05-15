"use strict";function ownKeys(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})),t.push.apply(t,r)}return t}function _objectSpread(s){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(t,!0).forEach(function(e){_defineProperty(s,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):ownKeys(t).forEach(function(e){Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(t,e))})}return s}function _defineProperty(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}var fs=require("fs"),path=require("path"),webpack=require("webpack"),resolve=require("resolve"),PnpWebpackPlugin=require("pnp-webpack-plugin"),HtmlWebpackPlugin=require("html-webpack-plugin"),CaseSensitivePathsPlugin=require("case-sensitive-paths-webpack-plugin"),InlineChunkHtmlPlugin=require("react-dev-utils/InlineChunkHtmlPlugin"),TerserPlugin=require("terser-webpack-plugin"),MiniCssExtractPlugin=require("mini-css-extract-plugin"),OptimizeCSSAssetsPlugin=require("optimize-css-assets-webpack-plugin"),safePostCssParser=require("postcss-safe-parser"),ManifestPlugin=require("webpack-manifest-plugin"),InterpolateHtmlPlugin=require("react-dev-utils/InterpolateHtmlPlugin"),WorkboxWebpackPlugin=require("workbox-webpack-plugin"),WatchMissingNodeModulesPlugin=require("react-dev-utils/WatchMissingNodeModulesPlugin"),ModuleScopePlugin=require("react-dev-utils/ModuleScopePlugin"),getCSSModuleLocalIdent=require("react-dev-utils/getCSSModuleLocalIdent"),paths=require("./paths"),modules=require("./modules"),getClientEnvironment=require("./env"),ModuleNotFoundPlugin=require("react-dev-utils/ModuleNotFoundPlugin"),ForkTsCheckerWebpackPlugin=require("react-dev-utils/ForkTsCheckerWebpackPlugin"),typescriptFormatter=require("react-dev-utils/typescriptFormatter"),values=require("postcss-modules-values"),postcssNormalize=require("postcss-normalize"),appPackageJson=require(paths.appPackageJson),shouldUseSourceMap="false"!==process.env.GENERATE_SOURCEMAP,shouldInlineRuntimeChunk="false"!==process.env.INLINE_RUNTIME_CHUNK,isExtendingEslintConfig="true"===process.env.EXTEND_ESLINT,imageInlineSizeLimit=parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT||"10000"),useTypeScript=fs.existsSync(paths.appTsConfig),cssRegex=/\.css$/,cssModuleRegex=/\.module\.css$/,sassRegex=/\.(scss|sass)$/,sassModuleRegex=/\.module\.(scss|sass)$/,lessRegex=/\.(less)$/,lessModuleRegex=/\.module\.(less)$/;module.exports=function(e){function s(e,s){var t=[r&&require.resolve("style-loader"),o&&{loader:MiniCssExtractPlugin.loader,options:paths.publicUrlOrPath.startsWith(".")?{publicPath:"../../"}:{}},{loader:require.resolve("css-loader"),options:e},{loader:require.resolve("postcss-loader"),options:{ident:"postcss",plugins:function(){return[require("postcss-flexbugs-fixes"),require("postcss-preset-env")({autoprefixer:{flexbox:"no-2009"},stage:3}),postcssNormalize()]},sourceMap:o&&shouldUseSourceMap}}].filter(Boolean);return s&&t.push({loader:require.resolve("resolve-url-loader"),options:{sourceMap:o&&shouldUseSourceMap}},{loader:require.resolve(s),options:{sourceMap:!0}}),t}var r="development"===e,o="production"===e,t=o&&process.argv.includes("--profile"),a=getClientEnvironment(paths.publicUrlOrPath.slice(0,-1));return{mode:o?"production":r&&"development",bail:o,devtool:o?!!shouldUseSourceMap&&"source-map":r&&"cheap-module-source-map",entry:[r&&require.resolve("react-dev-utils/webpackHotDevClient"),paths.appIndexJs].filter(Boolean),output:{path:o?paths.appBuild:void 0,pathinfo:r,filename:o?"static/js/[name].[contenthash:8].js":r&&"static/js/bundle.js",futureEmitAssets:!0,chunkFilename:o?"static/js/[name].[contenthash:8].chunk.js":r&&"static/js/[name].chunk.js",publicPath:paths.publicUrlOrPath,devtoolModuleFilenameTemplate:o?function(e){return path.relative(paths.appSrc,e.absoluteResourcePath).replace(/\\/g,"/")}:r&&function(e){return path.resolve(e.absoluteResourcePath).replace(/\\/g,"/")},jsonpFunction:"webpackJsonp".concat(appPackageJson.name),globalObject:"this"},optimization:{minimize:o,minimizer:[new TerserPlugin({terserOptions:{parse:{ecma:8},compress:{ecma:5,warnings:!1,comparisons:!1,inline:2},mangle:{safari10:!0},keep_classnames:t,keep_fnames:t,output:{ecma:5,comments:!1,ascii_only:!0}},sourceMap:shouldUseSourceMap}),new OptimizeCSSAssetsPlugin({cssProcessorOptions:{parser:safePostCssParser,map:!!shouldUseSourceMap&&{inline:!1,annotation:!0}},cssProcessorPluginOptions:{preset:["default",{minifyFontValues:{removeQuotes:!1}}]}})],splitChunks:{chunks:"all",name:!1},runtimeChunk:{name:function(e){return"runtime-".concat(e.name)}}},resolve:{modules:["node_modules",paths.appNodeModules].concat(modules.additionalModulePaths||[]),extensions:paths.moduleFileExtensions.map(function(e){return".".concat(e)}).filter(function(e){return useTypeScript||!e.includes("ts")}),alias:_objectSpread({"react-native":"react-native-web"},t&&{"react-dom$":"react-dom/profiling","scheduler/tracing":"scheduler/tracing-profiling"},{},modules.webpackAliases||{}),plugins:[PnpWebpackPlugin,new ModuleScopePlugin(paths.appSrc,[paths.appPackageJson])]},resolveLoader:{plugins:[PnpWebpackPlugin.moduleLoader(module)]},module:{strictExportPresence:!0,rules:[{parser:{requireEnsure:!1}},{test:/\.(js|mjs|jsx|ts|tsx)$/,enforce:"pre",use:[{options:{cache:!0,formatter:require.resolve("react-dev-utils/eslintFormatter"),eslintPath:require.resolve("eslint"),resolvePluginsRelativeTo:__dirname},loader:require.resolve("eslint-loader")}],include:paths.appSrc},{oneOf:[{test:[/\.bmp$/,/\.gif$/,/\.jpe?g$/,/\.png$/],loader:require.resolve("url-loader"),options:{limit:imageInlineSizeLimit,name:"static/media/[name].[hash:8].[ext]"}},{test:/\.css$/,loader:"style-loader!css-loader?modules"},{test:/\.css$/,loader:"style-loader!css-loader?modules&localIdentName=[path][name]-[local]-[hash:base64:5]"},{test:/\.(js|mjs|jsx|ts|tsx)$/,include:paths.appSrc,loader:require.resolve("babel-loader"),options:{customize:require.resolve("babel-preset-react-app/webpack-overrides"),plugins:[[require.resolve("babel-plugin-named-asset-import"),{loaderMap:{svg:{ReactComponent:"@svgr/webpack?-svgo,+titleProp,+ref![path]"}}}]],cacheDirectory:!0,cacheCompression:!1,compact:o}},{test:/\.(js|mjs)$/,exclude:/@babel(?:\/|\\{1,2})runtime/,loader:require.resolve("babel-loader"),options:{babelrc:!1,configFile:!1,compact:!1,presets:[[require.resolve("babel-preset-react-app/dependencies"),{helpers:!0}]],cacheDirectory:!0,cacheCompression:!1,sourceMaps:shouldUseSourceMap,inputSourceMap:shouldUseSourceMap}},{test:cssRegex,exclude:cssModuleRegex,use:s({importLoaders:1,sourceMap:o&&shouldUseSourceMap}),sideEffects:!0},{test:cssModuleRegex,use:s({importLoaders:1,sourceMap:o&&shouldUseSourceMap,modules:{getLocalIdent:getCSSModuleLocalIdent}})},{test:sassRegex,exclude:sassModuleRegex,use:s({importLoaders:3,sourceMap:o&&shouldUseSourceMap},"sass-loader"),sideEffects:!0},{test:sassModuleRegex,use:s({importLoaders:3,sourceMap:o&&shouldUseSourceMap,modules:{getLocalIdent:getCSSModuleLocalIdent}},"sass-loader")},{test:lessRegex,exclude:lessModuleRegex,use:s({importLoaders:2,sourceMap:o&&shouldUseSourceMap},"less-loader"),sideEffects:!0},{test:lessModuleRegex,use:s({importLoaders:2,sourceMap:o&&shouldUseSourceMap,modules:!0,getLocalIdent:getCSSModuleLocalIdent},"less-loader")},{loader:require.resolve("file-loader"),exclude:[/\.(js|mjs|jsx|ts|tsx)$/,/\.html$/,/\.json$/],options:{name:"static/media/[name].[hash:8].[ext]"}}]}]},plugins:[new HtmlWebpackPlugin(Object.assign({},{inject:!0,template:paths.appHtml},o?{minify:{removeComments:!0,collapseWhitespace:!0,removeRedundantAttributes:!0,useShortDoctype:!0,removeEmptyAttributes:!0,removeStyleLinkTypeAttributes:!0,keepClosingSlash:!0,minifyJS:!0,minifyCSS:!0,minifyURLs:!0}}:void 0)),o&&shouldInlineRuntimeChunk&&new InlineChunkHtmlPlugin(HtmlWebpackPlugin,[/runtime-.+[.]js/]),new InterpolateHtmlPlugin(HtmlWebpackPlugin,a.raw),new ModuleNotFoundPlugin(paths.appPath),new webpack.DefinePlugin(a.stringified),r&&new webpack.HotModuleReplacementPlugin,r&&new CaseSensitivePathsPlugin,r&&new WatchMissingNodeModulesPlugin(paths.appNodeModules),o&&new MiniCssExtractPlugin({filename:"static/css/[name].[contenthash:8].css",chunkFilename:"static/css/[name].[contenthash:8].chunk.css"}),new ManifestPlugin({fileName:"asset-manifest.json",publicPath:paths.publicUrlOrPath,generate:function(e,s,t){return{files:s.reduce(function(e,s){return e[s.name]=s.path,e},e),entrypoints:t.main.filter(function(e){return!e.endsWith(".map")})}}}),new webpack.IgnorePlugin(/^\.\/locale$/,/moment$/),o&&new WorkboxWebpackPlugin.GenerateSW({clientsClaim:!0,exclude:[/\.map$/,/asset-manifest\.json$/],importWorkboxFrom:"cdn",navigateFallback:paths.publicUrlOrPath+"index.html",navigateFallbackBlacklist:[new RegExp("^/_"),new RegExp("/[^/?]+\\.[^/]+$")]}),useTypeScript&&new ForkTsCheckerWebpackPlugin({typescript:resolve.sync("typescript",{basedir:paths.appNodeModules}),async:r,useTypescriptIncrementalApi:!0,checkSyntacticErrors:!0,resolveModuleNameModule:process.versions.pnp?"".concat(__dirname,"/pnpTs.js"):void 0,resolveTypeReferenceDirectiveModule:process.versions.pnp?"".concat(__dirname,"/pnpTs.js"):void 0,tsconfig:paths.appTsConfig,reportFiles:["**","!**/__tests__/**","!**/?(*.)(spec|test).*","!**/src/setupProxy.*","!**/src/setupTests.*"],silent:!0,formatter:o?typescriptFormatter:void 0})].filter(Boolean),node:{module:"empty",dgram:"empty",dns:"mock",fs:"empty",http2:"empty",net:"empty",tls:"empty",child_process:"empty"},performance:!1}};