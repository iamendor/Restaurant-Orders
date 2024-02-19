import path from "path";
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join("./src", "app", "**", "*")],
    prependData: "@import '~@/src/app/variables.scss';",
  },
};

export default nextConfig;
