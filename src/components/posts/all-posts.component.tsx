import { PostItemType } from '@/types/PostItem'
import classes from './all-posts.module.css'
import PostsGrid from './posts-gird.component'

type Props = {
    posts:PostItemType[]
}

const AllPosts = ({posts}: Props) => {
  return (
    <section className={classes.posts}>
        <h1>All posts</h1>
        <PostsGrid posts={posts}/>
    </section>
  )
}

export default AllPosts