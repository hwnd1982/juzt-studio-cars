/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.mds.yandex.net",
        pathname: "/get-verba/**",
      },
    ],
  },
};

export default nextConfig;
