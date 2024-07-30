export default {
    title: 'CyberPunk-UI',
    description: 'cyberpunk-ui',
    themeConfig: {
      lastUpdate: '最后更新时间',
      docsDir: 'docs',
      editLinks: true,
      editLinkText: '编辑网站',
      repo: 'https://gitee.com/login',
      footer: {
        message: 'Relcased under the Mit Lincense.',
        copyright: 'CopyRight 2023-anxueyu',
      },
      nav: [
        { text: "指南", link: "/guild/installation", activeMatch: '/guide/' },
        { text: "组件", link: "/component/button/", activeMatch: '/component/' },
      ],
      sidebar: {
        "/guild/": [
          {
            text: "基础",
            items: [
              {
                text: "安装",
                link: "/guild/installation",
              },
              {
                text: "快速开始",
                link: "/guild/quickstart",
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
                text:"基础组件",
                items: [{text:"button", link:"/component/button"}]
            }
        ]
      },
    },
  }

// 更多配置 https://process1024.github.io/vitepress/