import PostContent from "@/components/posts/post-detail/post-content.component"
import { PostItemType } from "@/types/PostItem"
import { GetStaticProps , GetStaticPaths } from 'next'

type Props = {
  postData:PostItemType
}

const PostItem = ({postData}: Props) => {
  return (
    <PostContent postData={postData}/>
  )
}

import {getPostData} from '@/utils/getPost'

export const getStaticProps : GetStaticProps = async (context) => {
  // get the encoded url segment
    const {params} = context
    const postData = await getPostData(params!.slug + '.md')
    return {
      props:{
        postData
      }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths:[],
      fallback:'blocking'
    }
}

export default PostItem