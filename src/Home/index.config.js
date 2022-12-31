import blog_img from '@/assets/img/Home/coderh-blog.png'

const config = {
  technology: [
    '熟悉React和Vue开发',
    '熟悉Webpack各项配置',
    '熟悉NodeJS框架Express和Koa',
    '熟悉常用的设计模式和数据结构',
  ],
  projectList: [
    {
      title: 'Coderh个人博客',
      img: blog_img,
      technical: ['React', 'ReduxJs/tookit', 'ReactRouter6', 'Antd框架'],
      desc: '用于知识分享和React技术练习',
    },
  ],
  mine_herfList: [
    {
      title: 'Github',
      herf: 'https://github.com/Coder-hrl',
      img_src: require('@/assets/img/github.png'),
    },
    {
      title: 'Gitee',
      herf: 'https://gitee.com/huangruilin',
      img_src: require('@/assets/img/gitee.png'),
    },
    {
      title: '掘金',
      herf: 'https://juejin.cn/user/2929541598425223',
      img_src: require('@/assets/img/juejin.png'),
    },
    {
      title: '个人博客',
      herf: 'https://blog.coderh.cn',
      img_src: null,
    },
  ],
}

export default config
