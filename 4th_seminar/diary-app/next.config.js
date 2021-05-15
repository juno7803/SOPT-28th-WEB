/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  webpack(config) {
    config.module.rules.push({
      // 웹팩설정에 로더 추가함
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
};
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer({
//   target: "serverless",

//   webpack(conf) {
//     conf.module.rules.push({
//       test: /\.svg$/,
//       use: [
//         {
//           loader: "@svgr/webpack",
//           options: {
//             svgoConfig: {
//               plugins: [
//                 {
//                   removeRasterImages: false,
//                   removeStyleElement: false,
//                   removeUnknownsAndDefaults: false,
//                 },
//               ],
//             },
//           },
//         },
//       ],
//     });

//     return conf;
//   },
// });
