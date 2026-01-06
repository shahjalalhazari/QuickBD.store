const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://quickbd.store'
const SITE_NAME = 'QuickBD.store'
const SITE_DESCRIPTION = 'Bangladesh\'s fastest and most reliable online shopping platform'
const SITE_KEYWORDS = [
  // Brand and core service
  'quickbd.store',
  'quickbd',
  'quickbd.store delivery',
  'quickbd.store bangladesh',
  'quickbd.store online shopping',

  // Core services
  'home delivery bangladesh',
  'quick delivery service bangladesh',
  'online shopping bangladesh',
  'bangladesh delivery app',
  'fast delivery',
  'reliable delivery service',
  'home delivery service',
  'home delivery in gouripur',
  'home delivery in daudkandi',
  'home delivery in eliatgong',
  'home delivery in shahidnagar',
  'home delivery in sachar',
  'home delivery in moloy',
  'home delivery in juranpur',
  'home delivery in daspara',
  'home delivery in titas',
  'home delivery in batakandi',
  'home delivery in dorikandi',
  'home delivery in homna',

  // Product categories
  'grocery delivery',
  'electronics delivery',
  'fashion online',
  'medicine delivery',
  'food delivery',
  'mobile phone delivery',
  'cosmetics delivery',
  'baby products delivery',
  'grocery shopping',
  'electronics shopping',
  'fashion online shopping',
  'medicine shopping',
  'food shopping',
  'mobile phone shopping',
  'cosmetics shopping',
  'baby products shopping',

  // Payment methods
  'cash on delivery bangladesh',
  'bkash payment online shopping',
  'nagad payment delivery',
  'card payment bangladesh',
  'online payment bangladesh',

  // Service features
  'same day delivery bangladesh',
  'next day delivery dhaka',
  'express delivery bangladesh',
  'quick home delivery',
  'free delivery bangladesh',
  'fast shipping bangladesh',

  // Problem-solving keywords
  'shop from home bangladesh',
  'get everything delivered bangladesh',
  'order online bangladesh',
  'buy online bangladesh',
  'online store bangladesh',
  'bangladesh ecommerce',
  
  // Urgent needs
  'quick grocery delivery',
  'emergency medicine delivery',
  'fast electronics delivery',
  'urgent delivery service',
  'instant delivery bangladesh'
]

const AUTHOR = 'QuickBD.store Team'
const CREATOR = 'QuickBD.store'
const PUBLISHER = 'QuickBD.store'
const CATEGORY = 'E-commerce'
const THEME_COLOR = '#EE7411'

// Template names for different pages
const TEMPLATE_NAMES = {
  home: `${SITE_NAME} - ${SITE_DESCRIPTION}`,
  products: '%s | Products | ' + SITE_NAME,
  categories: '%s | Categories | ' + SITE_NAME,
  productDetail: '%s | Buy Now | ' + SITE_NAME,
  cart: 'Shopping Cart | ' + SITE_NAME,
  checkout: 'Checkout | ' + SITE_NAME,
  contact: 'Contact Us | ' + SITE_NAME,
  faq: 'FAQ | ' + SITE_NAME,
  blog: '%s | Blog | ' + SITE_NAME,
  search: 'Search Results | ' + SITE_NAME,
  account: 'My Account | ' + SITE_NAME,
  wishlist: 'My Wishlist | ' + SITE_NAME,
  favorites: 'My Favorites | ' + SITE_NAME,
  orders: 'My Orders | ' + SITE_NAME,
  privacy: 'Privacy Policy | ' + SITE_NAME,
  terms: 'Terms of Service | ' + SITE_NAME,
  shipping: 'Shipping Policy | ' + SITE_NAME,
  returns: 'Return Policy | ' + SITE_NAME,
  login: 'Login | ' + SITE_NAME,
  register: 'Register | ' + SITE_NAME,
}

// Open Graph templates
const OPEN_GRAPH_TEMPLATES = {
  default: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.jpg`],
  },
  product: {
    title: '%s - ' + SITE_NAME,
    description: 'Buy %s from ' + SITE_NAME + '. ' + SITE_DESCRIPTION,
    images: ['%s'],
  },
  category: {
    title: '%s - Shop Now | ' + SITE_NAME,
    description: 'Explore %s collection on ' + SITE_NAME,
    images: ['%s'],
  },
}

// Twitter templates
const TWITTER_TEMPLATES = {
  default: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/twitter-image.jpg`],
    creator: '@quickbd_store',
    site: '@quickbd_store',
  },
  product: {
    title: '%s - ' + SITE_NAME,
    description: 'Check out %s on ' + SITE_NAME,
    images: ['%s'],
  },
}

// Export base metadata
export const baseMetadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TEMPLATE_NAMES.home,
    template: '%s | ' + SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS.join(', '),
  authors: [{ name: AUTHOR }],
  creator: CREATOR,
  publisher: PUBLISHER,
  category: CATEGORY,
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: OPEN_GRAPH_TEMPLATES.default.title,
    description: OPEN_GRAPH_TEMPLATES.default.description,
    images: OPEN_GRAPH_TEMPLATES.default.images.map(image => ({
      url: image,
      width: 1200,
      height: 630,
      alt: SITE_NAME,
    })),
  },
  
  twitter: {
    card: TWITTER_TEMPLATES.default.card,
    title: TWITTER_TEMPLATES.default.title,
    description: TWITTER_TEMPLATES.default.description,
    images: TWITTER_TEMPLATES.default.images,
    creator: TWITTER_TEMPLATES.default.creator,
    site: TWITTER_TEMPLATES.default.site,
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  
  manifest: '/manifest.json',
  themeColor: THEME_COLOR,
  
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-US': SITE_URL,
      'bn-BD': `${SITE_URL}/bn`,
    },
  },
  
  verification: {
    google: '',
    yandex: '',
    yahoo: '',
    me: ['quickbd.store'],
  },
  
  other: {
    'application-name': SITE_NAME,
    'apple-mobile-web-app-title': SITE_NAME,
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': THEME_COLOR,
    'msapplication-config': '/browserconfig.xml',
    'format-detection': 'telephone=no',
  },
}

// Helper functions for dynamic metadata
export function generateProductMetadata(product) {
  return {
    title: TEMPLATE_NAMES.productDetail.replace('%s', product.name),
    description: `Buy ${product.name} at best price in Bangladesh. ${product.description}`,
    keywords: [...SITE_KEYWORDS, product.name, product.category, 'price in bangladesh', 'buy online'],
    openGraph: {
      ...baseMetadata.openGraph,
      title: OPEN_GRAPH_TEMPLATES.product.title.replace('%s', product.name),
      description: OPEN_GRAPH_TEMPLATES.product.description.replace('%s', product.name),
      images: [product.image],
    },
    twitter: {
      ...baseMetadata.twitter,
      title: TWITTER_TEMPLATES.product.title.replace('%s', product.name),
      description: TWITTER_TEMPLATES.product.description.replace('%s', product.name),
      images: [product.image],
    },
  }
}

export function generateCategoryMetadata(category) {
  return {
    title: TEMPLATE_NAMES.categories.replace('%s', category.name),
    description: `Shop ${category.name} from ${SITE_NAME}. ${category.description}`,
    keywords: [...SITE_KEYWORDS, category.name, `${category.name} bangladesh`],
    openGraph: {
      ...baseMetadata.openGraph,
      title: OPEN_GRAPH_TEMPLATES.category.title.replace('%s', category.name),
      description: OPEN_GRAPH_TEMPLATES.category.description.replace('%s', category.name),
      images: [category.image],
    },
  }
}

// Export template names for use in components
export { TEMPLATE_NAMES, SITE_NAME, SITE_DESCRIPTION, SITE_URL }