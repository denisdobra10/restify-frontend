export default defineNuxtConfig({
  compatibilityDate: '2025-11-18',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt'
  ],

  // Nuxt UI configuration for content
  ui: {
    content: true,
    fonts: true
  },

  // Icon configuration - only bundle the collections we actually use
  icon: {
    serverBundle: {
      collections: ['heroicons', 'lucide']
    }
  },

  // CSS configuration
  css: ['~/assets/css/main.css'],

  // App configuration
  app: {
    head: {
      title: 'Laravel Restify',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Laravel Restify Documentation - Build amazing REST APIs with Laravel' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/icon.png' }
      ],
      script: [
        {
          src: '//code.tidio.co/pgx3d8jlrufene0cnyv274lgege4u5c1.js',
          async: true
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-R8WWHZK13N',
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R8WWHZK13N');
          `
        }
      ]
    }
  },

  // TypeScript configuration
  typescript: {
    typeCheck: false
  },

  // Static site generation for Vercel
  ssr: true,
  nitro: {
    preset: 'vercel-static',
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: [
        '/',
        '/docs',
        '/docs/quickstart',
        '/docs/api/repositories',
        '/docs/api/fields',
        '/docs/api/actions',
        '/docs/api/relations',
        '/docs/api/getters',
        '/docs/api/repositories-advanced',
        '/docs/api/repositories-basic',
        '/docs/api/repository-generation',
        '/docs/api/rest-methods',
        '/docs/api/serializer',
        '/docs/api/validation-methods',
        '/docs/auth/authentication',
        '/docs/auth/authorization',
        '/docs/auth/profile',
        '/docs/search/basic-filters',
        '/docs/search/advanced-filters',
        '/docs/search/sorting',
        '/docs/performance/performance',
        '/docs/performance/solutions',
        '/docs/graphql/graphql',
        '/docs/graphql/graphql-generation',
        '/docs/mcp/mcp',
        '/docs/mcp/repositories',
        '/docs/mcp/fields',
        '/docs/mcp/getters',
        '/docs/mcp/json-schema-converter',
        '/docs/mcp/actions',
        '/docs/boost/boost',
        '/docs/testing/testing'
      ]
    }
  }
})