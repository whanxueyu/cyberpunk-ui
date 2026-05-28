// .vitepress/config.ts
import path from 'path'

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
      copyright: 'CopyRight 2026-anxueyu',
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
            {
              text: "实战案例",
              link: "/guide/examples",
            },
            {
              text: "主题与样式",
              link: "/guide/theme",
            },
            {
              text: "最佳实践",
              link: "/guide/best-practices",
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
      "/advance/": [
        {
          text: "进阶指南",
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
            { text: "banner 3D轮播", link: "/components/banner" },
            { text: "divider 分割线", link: "/components/divider" },
            { text: "input 输入框", link: "/components/input" },
            { text: "neon-toggle 霓虹开关", link: "/components/neon-toggle" },
          ]
        },
        {
          text: "按钮组件",
          items: [
            { text: "button 故障按钮", link: "/components/button" },
            { text: "nenobutton 霓虹按钮", link: "/components/nenobutton" },
            { text: "reflectbutton 反光按钮", link: "/components/reflectbutton" },
          ]
        },
        {
          text: "文字组件",
          items: [
            { text: "text 故障文字", link: "/components/text" },
            { text: "glowtext 发光文字", link: "/components/glowtext" },
            { text: "shadowtext 阴影文字", link: "/components/shadowtext" },
            { text: "typing 打字效果", link: "/components/typing" },
            { text: "magictext 魔法文字", link: "/components/magictext" },
          ]
        },
        {
          text: "选择器组件",
          items: [
            { text: "select 选择器", link: "/components/select" },
            { text: "cascader 级联选择器", link: "/components/cascader" },
            { text: "tree 树形组件", link: "/components/tree" },
            { text: "menu 菜单", link: "/components/menu" },
          ]
        },
        {
          text: "进度条组件",
          items: [
            { text: "glitch-progress 故障进度条", link: "/components/glitch-progress" },
            { text: "progress 赛博进度条", link: "/components/progress" },
          ]
        },
        {
          text: "数据展示",
          items: [
            { text: "digital-counter 数字翻滚", link: "/components/digital-counter" },
            { text: "infinite-table 无限滚动表格", link: "/components/infinite-table" },
          ]
        },
        {
          text: "反馈组件",
          items: [
            { text: "cyber-notification 消息提示", link: "/components/cyber-notification" },
            { text: "cyber-tooltip 提示组件", link: "/components/cyber-tooltip" },
          ]
        },
        {
          text: "特效组件",
          items: [
            { text: "glitch-image 故障图片", link: "/components/glitch-image" },
            { text: "cyber-image 赛博图片", link: "/components/cyber-image" },
            { text: "holo-card 全息卡片", link: "/components/holo-card" },
            { text: "holo-loader 全息加载器", link: "/components/holo-loader" },
            { text: "fullpage 全屏滚动", link: "/components/fullpage" },
          ]
        }
      ]
    },
  },
}
// 新增banner  文字增加样式  card修复问题
// 更多配置 https://process1024.github.io/vitepress/
