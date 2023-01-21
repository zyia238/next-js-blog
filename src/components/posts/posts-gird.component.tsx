import classes from './posts-grid.module.css'
import PostItem from './post-item.component'

import { PostItemType } from '@/types/PostItem'


type Props = {
    posts:Array<PostItemType>
}

const PostsGrid = ({posts}: Props) => {
  return (
    <ul className={classes.grid}>
        {
            posts.map(post => <PostItem {...post} key={post.slug}/>)
        }
    </ul>
  )
}

export default PostsGrid