import ReactMarkdown from "react-markdown"
import {Prism as SyntaxHighlighter}  from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/cjs/styles/prism'

import PostHeader from "./post-header.component"
import classes from './post-content.module.css'
import { PostItemType } from "@/types/PostItem"

type Props = {
  postData:PostItemType
}

const PostContent = ({postData:{data,content}}: Props) => {

  return (
    <article className={classes.content}>
        <PostHeader title={data.title} image={`/images/posts/${data.image}`}/>
        <ReactMarkdown 
         components={{
          code({node, inline, className, children, style, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                
                style={dark}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
        >{content}</ReactMarkdown>
    </article>
  )
}

export default PostContent