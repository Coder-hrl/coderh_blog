import React, { Fragment } from 'react'

import AppSwpper from './style'
import config from './index.config'
import H2 from './components/H2'
import CoItem from './components/Item'
import actvor from '@/assets/img/Home/avctor.jpeg'

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
          <div className="tech-area">
            <H2 title="技术栈" type="h2" />
            <ul>
              {config.technology.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
          </div>
          <div className="area">
            <H2 title="项目展示" type="h2"></H2>
            <div className="co-item">
              {config.projectList.map((item) => {
                return (
                  <CoItem
                    key={item.title}
                    img={item.img}
                    title={item.title}
                    technical={item.technical}
                    desc={item.desc}
                  />
                )
              })}
            </div>
          </div>
          <div className="footer">
            <span>如果你想更好的了解我,不妨可以来这里看看</span>
            <div className="footer-main">
              {config.mine_herfList.map((item) => (
                <Fragment>
                  <a href={item.herf} target="_blank" rel="noreferrer">
                    {item.img_src && (
                      <img
                        src={item.img_src}
                        alt={item.title}
                        width="20"
                        height="20"
                      />
                    )}
                    {item.title}
                  </a>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            备案号:
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noreferrer"
            >
              冀ICP备2022003537号-1
            </a>
          </div>
        </div>
      </div>
    </AppSwpper>
  )
}

export default Home
