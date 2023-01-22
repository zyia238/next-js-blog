import FeaturedPosts from "@/components/homepage/Featured-posts.component"
import Hero from "@/components/homepage/Hero.component"
import { PostItemType } from "@/types/PostItem"

type Props = {
  featuredDataArr:Array<PostItemType>
}

const Home = ({featuredDataArr}: Props) => {
  return (
    <>
      <Hero/>
      <FeaturedPosts posts={featuredDataArr}/>
    </>
  )
}

import {getFeaturedPosts} from '@/utils/getPost'

export async function getStaticProps(){
  const featuredDataArr = await getFeaturedPosts()
  return {
    props:{
      featuredDataArr
    },
    revalidate:100
  }
}

export default Home