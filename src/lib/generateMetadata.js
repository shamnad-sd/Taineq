import { frontendUrl } from "@/utils/urls";

export function generateMetadata(data, nofollow, path) {
  // Determine if the data is in Yoast SEO format or your existing format
  const isYoastData = data?.yoast_head_json;

  // Extract SEO data based on the format
  const seo = isYoastData
    ? data.yoast_head_json
    : data?.data?.pages?.nodes[0]?.seo;

  const keyWords = isYoastData
    ? seo?.keywords || ''
    : data?.data?.pages?.nodes[0]?.seoKeywords?.seoKeywords;

  const sanitizedPath = path?.replace("/index", "");
  const canonicalUrl = isYoastData
    ? `${frontendUrl}${sanitizedPath}`
    : `${frontendUrl}${sanitizedPath}`|| seo?.canonical;

  const robotsDirective = nofollow || (isYoastData
    ? seo?.robots?.index === "noindex" || seo?.robots?.follow === "nofollow"
    : seo?.metaRobotsNofollow === "nofollow")
    ? { index: false, follow: false }
    : { index: true, follow: true };

  return {
    title: seo?.title || 'EEIS',
    description: isYoastData
      ? seo?.description || 'EEIS'
      : seo?.metaDesc || 'EEIS',
    metadataBase: new URL(frontendUrl),
      icons: {
      icon: [
        // Always use your custom favicon first
        ...(true
          ? [
              { url: 'https://admin.taineq.com/wp-content/uploads/2025/10/TAINEQ-final-logo-1-1-e1761454505491.png', sizes: '16x16', type: 'image/png' },
              { url: 'https://admin.taineq.com/wp-content/uploads/2025/10/TAINEQ-final-logo-1-1-e1761454505491.png', sizes: '32x32', type: 'image/png' },
            ]
          // If you want to fallback to OG image ONLY if favicon is missing, you can check for its existence
          : isYoastData && seo?.og_image?.length
          ? [
              { url: seo.og_image[0]?.url || '', sizes: '32x32', type: seo.og_image[0]?.type || 'image/png' },
              { url: seo.og_image[0]?.url || '', sizes: '16x16', type: seo.og_image[0]?.type || 'image/png' },
            ]
          : seo?.opengraphImage?.sourceUrl
          ? [
              { url: seo.opengraphImage.sourceUrl, sizes: '32x32', type: 'image/png' },
              { url: seo.opengraphImage.sourceUrl, sizes: '16x16', type: 'image/png' },
            ]
          : []
        ),
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        { rel: 'manifest', url: '/' },
      ],
    },
    themeColor: '#63af51',
    alternates: {
      canonical: canonicalUrl,
    },
    robots: robotsDirective,
    openGraph: {
      title: seo?.og_title || seo?.title || 'EEIS',
      description: seo?.og_description || seo?.metaDesc || 'EEIS',
      url: canonicalUrl ||  seo?.og_url ,
      siteName: seo?.og_site_name || 'EEIS',
      locale: seo?.og_locale || 'en_US',
      type: seo?.og_type || 'website',
      modifiedTime: seo?.article_modified_time || seo?.opengraphModifiedTime || '',
      images: isYoastData
        ? seo?.og_image?.map(image => ({
            url: image.url || '',
            width: image.width || null,
            height: image.height || null,
            type: image.type || '',
          })) || []
        : [
            {
              url: seo?.opengraphImage?.sourceUrl || '',
              width: 479,
              height: 482,
              type: 'image/webp',
              alt: seo?.opengraphImage?.altText || '',
            },
          ],
    },
    twitter: {
      card: seo?.twitter_card || 'summary_large_image',
      title: seo?.twitterTitle || seo?.title || '',
      description: seo?.twitterDescription || seo?.metaDesc || '',
      images: isYoastData
        ? seo?.og_image?.map(image => image.url) || []
        : [seo?.twitterImage?.sourceUrl || seo?.opengraphImage?.sourceUrl || ''],
    },
  };
}