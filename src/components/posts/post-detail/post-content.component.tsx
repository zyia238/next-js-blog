import PostHeader from "./post-header.component"
import classes from './post-content.module.css'

const DummyPost =  {
    title:'1',
    image:'1.jpg',
    excerpt:'1',
    date:'1',
    slug:'1',
    content:'# This is markdown syntax'
}

type Props = {}

const PostContent = (props: Props) => {
  return (
    <article className={classes.content}>
        <PostHeader title={DummyPost.title} image={`/images/posts/${DummyPost.image}`}/>
        {DummyPost.content}
    </article>
  )
}

export default PostContent