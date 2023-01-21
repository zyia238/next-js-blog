import classes from './featured-posts.module.css'
import PostsGrid from '../posts/posts-gird.component'
import { PostItemType } from '@/types/PostItem'

type Props = {
  posts:Array<PostItemType>
}

const FeaturedPosts = ({posts}: Props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured posts</h2>
      <PostsGrid posts={posts}/>
    </section>
  )
}

export default FeaturedPosts