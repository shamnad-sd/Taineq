/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: [
          'localhost',
          'images.unsplash.com',
          'plus.unsplash.com',
          'img.freepik.com',
          'img.youtube.com',
          'admin.taineq.com',
        ],
      },
  async redirects() {
    return [
      {
        source: "/about.php",
        destination: "https://www.eeis.ae/about",
        permanent: true,
      },
      {
        source: "/work-zone-safety-products.php",
        destination: "https://www.eeis.ae/products/work-zone-safety-products",
        permanent: true,
      },
      {
        source: "/parking-products.php",
        destination: "https://www.eeis.ae/products/parking-products",
        permanent: true,
      },
      {
        source: "/led-signboards.php",
        destination: "https://www.eeis.ae/products/led-signboards",
        permanent: true,
      },
      {
        source: "/contact.php",
        destination: "https://www.eeis.ae/contact",
        permanent: true,
      },
      {
        source: "/solution-providers.php",
        destination: "https://www.eeis.ae/partners",
        permanent: true,
      },
      {
        source: "/clients.php",
        destination: "https://www.eeis.ae/clients",
        permanent: true,
      },
      {
        source: "/its-core-system.php",
        destination: "https://www.eeis.ae/its/its-central-platform",
        permanent: true,
      },
      {
        source: "/smart-parking-solutions.php",
        destination: "https://www.eeis.ae/its/smart-parking",
        permanent: true,
      },
      {
        source: "/traffic-counting-classification.php",
        destination: "https://www.eeis.ae/its/traffic-counting-classification",
        permanent: true,
      },
      {
        source: "/over-height-vehicle-detection-system.php",
        destination: "https://www.eeis.ae/its/over-height-vehicle-detection-system",
        permanent: true,
      },
      {
        source: "/variable-message-signs.php",
        destination: "https://www.eeis.ae/its/variable-message-signs",
        permanent: true,
      },
      {
        source: "/travel-time-information-system.php",
        destination: "https://www.eeis.ae/its/travel-time-information-system",
        permanent: true,
      },
      {
        source: "/smart-pedestrain-crossing-system.php",
        destination: "https://www.eeis.ae/its/smart-pedestrian-crossing-system",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
