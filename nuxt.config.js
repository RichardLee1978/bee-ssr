const path = require('path')
const vuxLoader = require('vux-loader')

module.exports = {
    head: {
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' }
        ]
      },
      css: [
        'vux/src/styles/reset.less',
        'vux/src/styles/1px.less'
      ],
      plugins:[
          {
            src: '~/plugins/vux-components',
            ssr: true
          },
          {
            src: '~/plugins/datadiff',
            ssr: true
          },
          {
            src: '~/plugins/datetimediff',
            ssr: true
          }
      ],
     
      build: {
        
        extend(config, { isDev, isClient }) {
          const configs = vuxLoader.merge(config, {
            options: {
              ssr: true
            },
            plugins: ['vux-ui', {
              name: 'less-theme',
              path: path.join(__dirname, './styles/theme.less')
            }]
          })
          return configs
        }
      },
      router: {
       
        extendRoutes (routes) {
          routes.push(
            {
              name:'default',
              path:'/',
              component: path.resolve(__dirname, 'pages/home.vue')
            },
            {
              name:'art-cate',
              path:'/art-:id',
              component: path.resolve(__dirname, 'pages/home.vue')
            },
            {
              name:'news',
              path:'/news',
              component: path.resolve(__dirname, 'pages/news.vue')
            },
            {
              name:'news-cate',
              path:'/news-:id',
              component: path.resolve(__dirname, 'pages/news.vue')
            },
            {
              name:'article-detail',
              path:'/d/:id',
              component: path.resolve(__dirname, 'pages/detail.vue')
            },
            {
              name:'user-center',
              path:'/user',
              component: path.resolve(__dirname, 'pages/user/center.vue')
            },
            {
              name:'user',
              path:'/user/invite',
              component: path.resolve(__dirname, 'pages/user/invite.vue')
            },
            {
              name:'user-login',
              path:'/login',
              component: path.resolve(__dirname, 'pages/login.vue')
            },
            {
              name:'user-register',
              path:'/register',
              component: path.resolve(__dirname, 'pages/register.vue')
            },
            {
              name: 'all',
              path: '*',
              component: path.resolve(__dirname, 'pages/404.vue')
            }
        )
        }
      }
}