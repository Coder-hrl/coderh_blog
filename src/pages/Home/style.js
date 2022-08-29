import styled from 'styled-components'

const HomeWrapper = styled.div`
  display: flex;
  height: inherit;

  .main-left {
    flex: 1;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .person_box {
      width: 400px;
      height: 400px;
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
    .person_box {
      margin-top: 30px;
      .area {
        ul {
          font-size: 16px;
        }
      }
    }
  }
`

export default HomeWrapper
