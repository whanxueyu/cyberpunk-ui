// .vitepress/config.ts
export default {
  title: 'CyberPunk-UI',
  description: 'cyberpunk-ui',
  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { property: 'og:title', content: 'CyberPunk-UI | Vite & Vue3 & TS Powered A library of future components' }],
    ['meta', { property: 'og:site_name', content: 'CyberPunk-UI' }],
  ],
  themeConfig: {
    appearance: true,
    lastUpdate: '最后更新时间',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑网站',
    logo: '/logo.svg',
    repo: 'https://gitee.com/login',
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Relcased under the Mit Lincense.',
      copyright: 'CopyRight 2024-anxueyu',
    },
    nav: [
      { text: "指南", link: "/guide/installation", activeMatch: '/guide/' },
      { text: "组件", link: "/component/button/", activeMatch: '/component/' },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guide/installation",
            },
            {
              text: "快速开始",
              link: "/guide/quickstart",
            },
          ],
        },
        {
          text: "进阶",
          items: [
            {
              text: "xx",
              link: "/xx",
            },
          ],
        },
      ],
      "/component/": [
        {
          text: "基础组件",
          items: [{ text: "button", link: "/component/button" }]
        }
      ]
    },
  },
}

// 更多配置 https://process1024.github.io/vitepress/