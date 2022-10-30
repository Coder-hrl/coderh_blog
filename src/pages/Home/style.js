import styled from 'styled-components'

const HomeWrapper = styled.div`
  display: flex;
  height: inherit;

  .main-left {
    width: 500px;
    min-height: 600px;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .person_box {
      width: 400px;
      height: 400px;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .actvor {
        width: 150px;
        height: 150px;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        font-size: 28px;
      }
      .desc {
        p {
          text-align: center;
        }
        p:first-child {
          font-size: 21px;
          color: green;
        }
      }
    }
  }
  .main-right {
    flex: 1;
    position: relative;
    .person_box {
      margin-top: 30px;
      .tech-area {
        ul {
          margin-left: 20px;
          background-color: #fff;
          li {
            color: #2f90b9;
            font-size: 16px;
          }
        }
      }
      .area {
        .co-item {
          margin-left: 20px;
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .footer {
      position: absolute;
      bottom: 25px;
      left: 40px;
      margin-top: 30px;
      font-size: 18px;
      display: flex;
      a {
        margin-left: 10px;
        display: flex;
        align-items: center;
        img {
          margin-right: 6px;
        }
      }
    }
    .footer-bottom {
      font-size: 18px;
      position: absolute;
      bottom: 0;
      left: 40px;
    }
  }
`

export default HomeWrapper
