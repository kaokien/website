module.exports = {
/* reactStrictMode: true,
   swcMinify: true
 }
 const withBundleAnalyzer = require('@next/bundle-analyzer')({ 
   enabled: process.env.ANALYZE === 'true'
 })
 module.exports = withBundleAnalyzer({})
*/
async redirects() {
    return [
      {
        source: "/((?!maintenance).*)",
        destination: "/maintenance.html",
        permanent: false,
      },
    ];
  },
};
