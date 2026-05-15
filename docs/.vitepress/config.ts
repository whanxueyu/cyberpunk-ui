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
      { text: "组件", link: "/components/button/", activeMatch: '/components/' },
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
              text: "自定义主题颜色",
              link: "/advance/themeColor",
            },
          ],
        },
      ],
      "/components/": [
        {
          text: "基础组件",
          items: [
            { text: "button 按钮", link: "/components/button" },
            { text: "text 文字", link: "/components/text" },
            { text: "banner 3D轮播", link: "/components/banner" },
            { text: "select 选择器", link: "/components/select" },
            { text: "霓虹开关", link: "/components/neon-toggle" },
            { text: "故障风格图片", link: "/components/glitch-image" },
            { text: "赛博风格图片", link: "/components/cyber-image" },
            { text: "数字翻滚", link: "/components/digital-counter" },
            { text: "故障进度条", link: "/components/glitch-progress" },
            { text: "Tooltip 提示组件", link: "/components/cyber-tooltip" },
            { text: "全屏滚动", link: "/components/fullpage" },
            { text: "全息卡片", link: "/components/holo-card" },
            { text: "全息加载器", link: "/components/holo-loader" },
            { text: "消息提示组件", link: "/components/cyber-notification" },
            // { text: "无限滚动表格", link: "/components/infinite-table" },
          ]
        }
      ]
    },
  },
}
// 新增banner  文字增加样式  card修复问题
// 更多配置 https://process1024.github.io/vitepress/
