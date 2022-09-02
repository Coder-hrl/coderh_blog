import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import JsSwpper from './style'
// import 'github-markdown-css/github-markdown.css'
import { getMdfile } from '@/api/Js/request'
// import remarkGfm from 'remark-gfm'

function Js() {
  const [markdown, setMarkdown] = useState('')

  const getFileContent = () => {
    getMdfile().then((res, err) => {
      console.log(res)
      setMarkdown(res)
    })
  }

  useEffect(() => {
    getFileContent()
  }, [])

  return (
    <JsSwpper>
      <div className="aside"></div>
      <div className="content">
        <ReactMarkdown className="markdown-body" children={markdown} />
      </div>
    </JsSwpper>
  )
}

export default Js
