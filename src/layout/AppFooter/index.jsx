import React from 'react'

import { AppFooterSwpper } from './style'
import gitee from '@/assets/img/gitee.png'
import github from '@/assets/img/github.png'
import juejin from '@/assets/img/juejin.png'

function AppFooter() {
  return (
    <AppFooterSwpper>
      <div className="footer-top">
        <span>如果你想更好的了解我,不妨可以来这里看看</span>
        <a href="https://github.com/Coder-hrl" target="_blank" rel="noreferrer">
          <img src={github} alt="github" width="16" height="16" />
          Github
        </a>
        <a
          href="https://gitee.com/huangruilin"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gitee} alt="gitee" width="16" height="16" />
          Gitee
        </a>
        <a href="https://github.com/Coder-hrl" target="_blank" rel="noreferrer">
          <img src={juejin} alt="juejin" width="16" height="16" />
          掘金
        </a>
      </div>
      <div className="footer-bottom">
        备案号: <a href="https://beian.miit.gov.cn/">冀ICP备2022003537号-1</a>
      </div>
    </AppFooterSwpper>
  )
}

export default AppFooter
