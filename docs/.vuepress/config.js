module.exports = {
    title: 'Hevin',
    description: '我是这个博客模板的描述',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    theme: 'vdoing',
    markdown: {
        lineNumbers: true, // 显示代码块的行号
        extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6']

    },
    base: '/vBook/',
    head: [
        [
            'meta',
            {
                name: 'keywords',
                content: '前端、Vue、Js、Css'
            }
        ], [
            'meta',
            {
                name: 'description',
                content: '我是这个博客模板的描述'
            }
        ]
    ],
    themeConfig: {
        updateBar: { showToArticle: false },
        sidebar: 'structuring',
        sidebarDepth: 4,
        lastUpdated: '上次更新',
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '博客',
                link: '/pages/24112f/'
            },
            {
                text: '专题内容',
                link: '/pages/264e1a/'
            }
        ],
        sidebar: {
            mode: 'structuring',
            collapsable: false
        },
        pageStyle: 'line',
        category: false,
        tag: false,
        archive: false,
        author: {
            name: 'Hevin'//必需
        },
        footer: {
            //页脚信息
            createYear: 2023,
            //博客创建年份
            copyrightInfo: 'Hevin',
            //博客版权信息，支持a标签
        }
    },
    plugins: [
    ]
}