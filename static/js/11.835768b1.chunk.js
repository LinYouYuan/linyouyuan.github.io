(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{362:function(n,e){n.exports={title:"\u4f7f\u7528create-react-app\u6dfb\u52a0css-modules",tags:"React",date:"2018-07-30 15:30:59",header_img:"",key:"\u4f7f\u7528create-react-app\u6dfb\u52a0css-modules.md",content:"\n\n# \u524d\u8a00\n\n`create-react-app`\u662ffacebook\u7684\u5b98\u65b9\u811a\u624b\u67b6\uff0c\u5bf9\u4e8e\u4e2a\u4eba\u5f00\u53d1\u8005\u548c\u4e2d\u5c0f\u578b\u516c\u53f8\u5feb\u901f\u521b\u5efa\u9879\u76ee\u975e\u5e38\u63a8\u8350\u3002react\u7684CSS\u89e3\u51b3\u65b9\u6848\u6709\u5f88\u591a\uff0c\u8fd9\u91cc\u6211\u6280\u672f\u9009\u578b\u65f6\u7528`css modules`\u548c`sass`\uff0c\u7136\u540e\u914d\u5408antd\u4f7f\u7528\u901a\u7528\u7ec4\u4ef6\u5e93\u3002\u4f46\u662fcreate-react-app\u539f\u751f\u5e76\u4e0d\u652f\u6301`css modules`\u548c`sass`\uff0c\u6240\u4ee5\u9700\u8981\u989d\u5916\u914d\u7f6e\u3002\n\n# \u914d\u7f6e\n\n## \u589e\u52a0css modules\u548csass\n\n### \u4f7f\u7528eject\u66b4\u9732\u914d\u7f6e\n\n`create-react-app`\u9ed8\u8ba4\u662f\u6ca1\u6709\u66b4\u9732`webpack`\u914d\u7f6e\u7684\uff0c\u6240\u4ee5\u9700\u8981eject\u4e00\u4e0b\u3002\u6ce8\u610f\u5982\u679c\u9879\u76ee\u5728git\u4ed3\u5e93\u73af\u5883\u4e0b\uff0c\u5148\u63d0\u4ea4\u4ee3\u7801\u5230git\u4ed3\u5e93\uff0c\u5426\u5219\u4f1a\u62a5\u9519\n\n```js\nnpm run eject\n```\n\n### npm\u6dfb\u52a0css modules\u548csass\n\n```js\nnpm install react-css-modules \nnpm install sass-loader node-sass\n```\n\n\u8fd9\u91cc\u5b89\u88c5sass\u53ef\u80fd\u4f1a\u9047\u5230\u5899\u7684\u95ee\u9898\u62a5\u9519\uff0c\u6240\u4ee5\u8981\u4e48\u4f7f\u7528cnpm\u6216\u8005\u4f7f\u7528\u672c\u5730\u4ee3\u7406\u8bbe\u7f6e\uff0c\u56e0\u4e3a\u6211\u6709ss\u6240\u4ee5\u4f7f\u7528\u672c\u5730\u4ee3\u7406\n\n```js\n// \u5f00\u542f\u4ee3\u7406\nnpm config set proxy http://127.0.0.1:1080\n// \u5b89\u88c5\u5b8csass\u540e\u5173\u95ed\u4ee3\u7406\nnpm config delete proxy\n```\n\n### webpack\u914d\u7f6e\n\n\u91cd\u70b9\u6765\u4e86\uff0c\u6211\u4eec\u9700\u8981\u7ed9`webpack`\u914d\u7f6e\u4e0a`css-modules`\u548c`sass-loader`\u3002\u4f46\u662f\u4f7f\u7528`css-modules`\u4f1a\u4f7f`node_modules`\u5e93\u91cc\u7684css\u6837\u5f0f\u627e\u4e0d\u5230\uff0c\u6bd4\u5982\u540e\u9762\u8981\u4f7f\u7528\u5230\u7684antd\uff0c\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u9700\u8981inclube\u6765\u6392\u9664\u5f71\u54cd`node_modules`\uff0c\u4f7f\u5f97`css-modules`\u4e0d\u4f1a\u5f71\u54cd\u5230`node_modules`\n\n\u4fee\u6539\u9879\u76ee\u4e2d`config`\u76ee\u5f55\u4e0b\u7684`webpack.config.dev.js`\u548c`webpack.config.prod.js`\uff0c\u8bf4\u660e\u4e0b\u8fd9\u4e24\u4e2a\u6587\u4ef6\uff0c\u524d\u4e00\u4e2a\u662f\u5f00\u53d1\u73af\u5883`npm start`\u4f7f\u7528\uff0c\u540e\u4e00\u4e2a\u662f`npm run build`\u6253\u5305\u540e\u4f7f\u7528\n\n- \u4fee\u6539`webpack.config.dev.js`:\n\n\u5927\u7ea6\u5728160\u884c\u5de6\u53f3\uff0c\u627e\u5230`test: /\\.css$/`\uff0c\u4e2d\u6587\u6ce8\u91ca\u7684\u5730\u65b9\u5c31\u662f\u4fee\u6539\u548c\u589e\u52a0\u7684\u5730\u65b9\n\n```js\n          {\n            test: [/\\.css$/, /\\.scss$/],// \u8fd9\u91cc\u589e\u52a0SCSS\u7684\u652f\u6301\n            exclude: [/node_modules/],// \u8fd9\u91cc\u53bb\u6392\u9664node_modules\uff0c\u9632\u6b62css modules\u5f71\u54cd\u5230node_modules\n            use: [\n              require.resolve('style-loader'),\n              {\n                loader: require.resolve('css-loader'),\n                options: {\n                  importLoaders: 1,\n                  modules: true, // \u8fd9\u91cc\u589e\u52a0\u5bf9css modules\u7684\u652f\u6301\n                  localIdentName: '[name]__[local]__[hash:base64:5]' //\u8fd9\u91cc\u589e\u52a0\u5bf9css modules\u7684\u652f\u6301\n                },\n              },\n              {\n                loader: require.resolve('sass-loader'), // \u8fd9\u91cc\u589e\u52a0sass\u7684\u652f\u6301\n              },\n              {\n                loader: require.resolve('postcss-loader'),\n                options: {\n                  // Necessary for external CSS imports to work\n                  // https://github.com/facebookincubator/create-react-app/issues/2677\n                  ident: 'postcss',\n                  plugins: () => [\n                    require('postcss-flexbugs-fixes'),\n                    autoprefixer({\n                      browsers: [\n                        '>1%',\n                        'last 4 versions',\n                        'Firefox ESR',\n                        'not ie < 9', // React doesn't support IE8 anyway\n                      ],\n                      flexbox: 'no-2009',\n                    }),\n                  ],\n                },\n              },\n            ],\n          },\n          // \u56e0\u4e3a\u4e0a\u9762\u6392\u9664\u4e86css_modules\u6240\u4ee5\u8fd9\u91cc\u4e00\u5b9a\u8981\u518d\u6dfb\u52a0\u4e2a\u6392\u9664src\u6765\u8bc6\u522bcss_modules\n          // \u5176\u5b9e\u5c31\u662f\u590d\u5236\u4e4b\u524d\u6ca1\u4fee\u6539\u524d\u7684\u6240\u6709\uff0c\u518d\u589e\u52a0\u4e00\u4e2aexclude: [/src/]\n          {\n            test: /\\.css$/, \n            exclude: [/src/], // \u8fd9\u91cc\u6dfb\u52a0\u6392\u9664src\uff0c\n            use: [\n              require.resolve('style-loader'),\n              {\n                loader: require.resolve('css-loader'),\n                options: {\n                  importLoaders: 1,\n                },\n              },\n              {\n                loader: require.resolve('postcss-loader'),\n                options: {\n                  // Necessary for external CSS imports to work\n                  // https://github.com/facebookincubator/create-react-app/issues/2677\n                  ident: 'postcss',\n                  plugins: () => [\n                    require('postcss-flexbugs-fixes'),\n                    autoprefixer({\n                      browsers: [\n                        '>1%',\n                        'last 4 versions',\n                        'Firefox ESR',\n                        'not ie < 9', // React doesn't support IE8 anyway\n                      ],\n                      flexbox: 'no-2009',\n                    }),\n                  ],\n                },\n              },\n            ],\n          }\n```\n\n- \u4fee\u6539`webpack.config.prod.js`:\n\n\u548c\u4e0a\u9762\u4fee\u6539`webpack.config.dev.js`\u7c7b\u4f3c\n\n```js\n        {\n            test: [/\\.css$/, /\\.scss$/], // \u8fd9\u91cc\u589e\u52a0SCSS\u7684\u652f\u6301\n            exclude: [/node_modules/], // \u8fd9\u91cc\u53bb\u6392\u9664node_modules\n            loader: ExtractTextPlugin.extract(\n              Object.assign(\n                {\n                  fallback: {\n                    loader: require.resolve('style-loader'),\n                    options: {\n                      hmr: false,\n                    },\n                  },\n                  use: [\n                    {\n                      loader: require.resolve('css-loader'),\n                      options: {\n                        importLoaders: 1,\n                        minimize: true,\n                        sourceMap: true,\n                        modules: true, // \u8fd9\u91cc\u6dfb\u52a0css modules\u652f\u6301\n                      },\n                    },\n                    {\n                      loader: require.resolve('postcss-loader'),\n                      options: {\n                        // Necessary for external CSS imports to work\n                        // https://github.com/facebookincubator/create-react-app/issues/2677\n                        ident: 'postcss',\n                        plugins: () => [\n                          require('postcss-flexbugs-fixes'),\n                          autoprefixer({\n                            browsers: [\n                              '>1%',\n                              'last 4 versions',\n                              'Firefox ESR',\n                              'not ie < 9', // React doesn't support IE8 anyway\n                            ],\n                            flexbox: 'no-2009',\n                          }),\n                        ],\n                      },\n                    },\n                    {\n                      loader: require.resolve('sass-loader'), // \u8fd9\u91cc\u6dfb\u52a0sass\u652f\u6301\n                    }\n                  ],\n                },\n\n                extractTextPluginOptions\n              )\n            ),\n            // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.\n          },\n          {\n            test: /\\.css$/,\n            exclude: [/src/], // \u6392\u9664src\n            loader: ExtractTextPlugin.extract(\n              Object.assign(\n                {\n                  fallback: {\n                    loader: require.resolve('style-loader'),\n                    options: {\n                      hmr: false,\n                    },\n                  },\n                  use: [\n                    {\n                      loader: require.resolve('css-loader'),\n                      options: {\n                        importLoaders: 1,\n                        minimize: true,\n                        sourceMap: true,\n                      },\n                    },\n                    {\n                      loader: require.resolve('postcss-loader'),\n                      options: {\n                        // Necessary for external CSS imports to work\n                        // https://github.com/facebookincubator/create-react-app/issues/2677\n                        ident: 'postcss',\n                        plugins: () => [\n                          require('postcss-flexbugs-fixes'),\n                          autoprefixer({\n                            browsers: [\n                              '>1%',\n                              'last 4 versions',\n                              'Firefox ESR',\n                              'not ie < 9', // React doesn't support IE8 anyway\n                            ],\n                            flexbox: 'no-2009',\n                          }),\n                        ],\n                      },\n                    }\n                  ],\n                },\n\n                extractTextPluginOptions\n              )\n            ),\n            // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.\n          }\n```\n\n### \u5b89\u88c5antd\u548c\u914d\u7f6e\n\n\u4e3b\u8981\u662f\u5b89\u88c5\u914d\u7f6e`antd`\u548c`babel-plugin-import`\uff0c\u8fd9\u6837\u53ef\u4ee5\u4f7f\u5f97`antd`\u6309\u9700\u52a0\u8f7d\u6837\u5f0f\n\n#### npm\u6dfb\u52a0antd\u548cbabel-plugin-import\n\n```js\nnpm install antd\nnpm install babel-plugin-import\n```\n\n#### \u914d\u7f6ebabel\n\n\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u589e\u52a0`.babelrc`\u6587\u4ef6\uff0c\u7136\u540e\u914d\u7f6e\u5982\u4e0b\n\n```js\n{\n  \"presets\": [\n    \"react-app\"\n  ],\n  \"plugins\": [\n    \"transform-runtime\",\n    [\n      \"import\",\n      {\n        \"libraryName\": \"antd\",\n        \"style\": \"css\"\n      }\n    ]\n  ]\n}\n```\n\n\u5927\u529f\u544a\u6210\n"}}}]);
//# sourceMappingURL=11.835768b1.chunk.js.map