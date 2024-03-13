import path from "path";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "/7.x/identicon/**",
      },
      
    ],
  },
  sassOptions: {
    includePaths: [path.join("./src", "app", "**", "*")],
    prependData: "@import '~@/app/variables.scss';",
  },
};

export default nextConfig;
