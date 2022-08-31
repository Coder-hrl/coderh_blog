import styled from 'styled-components'

const ItemSwpper = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  transition: all 0.5s linear;
  &:hover {
    box-shadow: 10px 10px 10px #d8e3e7;
    transform: translateY(-5px);
    transition: all 0.5s linear;
    height: 230px;
    .desc {
      opacity: 1;
      transition: all 0.5s linear;
    }
  }
  img {
    margin-top: 15px;
    width: 180px;
  }
  .title {
    font-size: 18px;
    color: red;
    font-weight: bold;
  }
  .technical {
    font-size: 15px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .tech-item {
      margin: 0 5px;
      color: green;
    }
  }
  .desc {
    opacity: 0;
    font-size: 14px;
    transition: all 0.5s linear;
  }
`

export default ItemSwpper
