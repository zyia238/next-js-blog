import FeaturedPosts from "@/components/homepage/Featured-posts.component"
import Hero from "@/components/homepage/Hero.component"
import { PostItemType } from "@/types/PostItem"

type Props = {}

const DUMMY_POSTS : Array<PostItemType> = [
  {
    title:'1',
    image:'1.jpg',
    excerpt:'1',
    date:'1',
    slug:'1'
  },
  {
    title:'2',
    image:'1.jpg',
    excerpt:'2',
    date:'2',
    slug:'2'
  },
  {
    title:'3',
    image:'1.jpg',
    excerpt:'3',
    date:'3',
    slug:'3'
  },
  {
    title:'4',
    image:'1.jpg',
    excerpt:'4',
    date:'4',
    slug:'4'
  },
]

const Home = (props: Props) => {
  return (
    <>
      <Hero/>
      <FeaturedPosts posts={DUMMY_POSTS}/>
    </>
  )
}

export default Home