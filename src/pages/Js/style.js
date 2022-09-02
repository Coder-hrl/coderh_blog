import styled from 'styled-components'
import 'github-markdown-css/github-markdown.css'

const JsSwpper = styled.div`
  /* display: flex;
  justify-content: center; */
  display: flex;
  .aside {
    width: 300px;
    flex: none;
  }
  .content {
    flex: 1;
    background-color: #fff;
    .markdown-body {
      width: calc(100% - 30px);
      margin: 15px auto 0px;
    }
  }
`

export default JsSwpper
