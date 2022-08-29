import React from 'react'

import AppSwpper from './style'
import H2 from './components/H2'
import actvor from '../../assets/img/actvor.jpeg'

function Home() {
  return (
    <AppSwpper>
      <div className="main-left">
        <div className="person_box">
          <div className="actvor">
            <img src={actvor} alt="我的头像" />
          </div>
          <div className="name">Coderh</div>
          <div className="desc">
            <p>React|Vue|Node|移动端开发</p>
            <p>对前端充满兴趣,但自知相差很多</p>
            <p>热爱技术,在项目中实现自我</p>
            <p>屡战屡败,永不放弃</p>
          </div>
        </div>
      </div>
      <div className="main-right">
        <div className="person_box">
          <div className="area">
            <H2 title="技术栈" />
            <ul>
              <li>熟悉React和Vue开发</li>
              <li>熟悉Webpack各项配置</li>
              <li>熟悉NodeJS框架Express和Koa</li>
            </ul>
          </div>
          <div className="area">
            <H2 title="项目展示"></H2>
          </div>
        </div>
      </div>
    </AppSwpper>
  )
}

export default Home
