
/* 头像路径 */
const headPath = require('@/assets/head.jpg')
const logoPath = require('@/assets/logo.png')
const TokenKey = 'auth-token'
const phoneWidth = 420
const menuValues = new Map()
menuValues.set('main', '首页')
menuValues.set('technology', '技术分享')
menuValues.set('tech-front', '前端')
menuValues.set('tech-front-basic', '技术分享-前端-基础')
menuValues.set('tech-front-frame', '技术分享-前端-框架')
menuValues.set('tech-front-other', '技术分享-前端-其它')
menuValues.set('tech-back', '后端')
menuValues.set('tech-back-basic', '技术分享-后端-基础')
menuValues.set('tech-back-frame', '技术分享-后端-框架')
menuValues.set('tech-back-other', '技术分享-后端-其它')
menuValues.set('tech-other', '其它')
menuValues.set('tech-other-other', '技术分享-其它-其它')
menuValues.set('life', '生活分享')
menuValues.set('others', '其它分享')
const blogCategory = [{
  value: 'technology',
  label: '技术分享',
  children: [{
    value: 'tech-front',
    label: '前端',
    children: [{
      value: 'tech-front-basic',
      label: '基础'
    },
    {
      value: 'tech-front-frame',
      label: '框架'
    }, {
      value: 'tech-front-other',
      label: '其它'
    }
    ]
  },
  {
    value: 'tech-back',
    label: '后端',
    children: [{
      value: 'tech-back-basic',
      label: '基础'
    },
    {
      value: 'tech-back-frame',
      label: '框架'
    }, {
      value: 'tech-back-other',
      label: '其它'
    }
    ]
  },
  {
    value: 'tech-other',
    label: '其它',
    children: [ {
      value: 'tech-other-other',
      label: '其它'
    }
    ]
  }] },
{
  value: 'life',
  label: '生活分享'
},
{
  value: 'others',
  label: '其它分享'
}
]

export default {
  headPath,
  logoPath,
  phoneWidth,
  menuValues,
  blogCategory,
  TokenKey
}
