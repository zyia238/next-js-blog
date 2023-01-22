import AllPosts from "@/components/posts/all-posts.component"
import { PostItemType } from "@/types/PostItem"

type Props = {
  allPost:Array<PostItemType>
}


const PostPage = ({allPost}: Props) => {
  return (
    <AllPosts posts={allPost} />
  )
}

import {getAllPosts} from '@/utils/getPost'

export async function getStaticProps(){
  const allPost = await getAllPosts()
  return {
    props:{
      allPost
    },
  }
}

export default PostPage