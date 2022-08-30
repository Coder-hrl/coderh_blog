import React from 'react'

import AppSwpper from './style'
import config from './index.config'
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
            <H2 title="技术栈" type="h2" />
            <ul>
              {config.technology.map((item) => {
                return <li>{item}</li>
              })}
            </ul>
          </div>
          <div className="area">
            <H2 title="项目展示" type="h2"></H2>
            {config.projectList.map((item) => {
              return (
                <>
                  <H2 title={item.title} type="h3" />
                  <ol>
                    {item.list.map((item) => {
                      return (
                        <li>
                          <a href={item.herf}>{item.label}</a>
                        </li>
                      )
                    })}
                  </ol>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </AppSwpper>
  )
}

export default Home
