import styled from 'styled-components'

export const AppMainSwpper = styled.div`
  .common {
    width: 98%;
    min-height: 620px;
    overflow: auto;
    border-radius: 15px;
    background-color: #eeeeee;
    margin: 0 auto;
  }

  .has-footer {
    height: calc(100vh - 145px);
  }
  .no-footer {
    height: calc(100vh - 60px);
  }
`
