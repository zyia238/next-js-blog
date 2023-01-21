import FeaturedPosts from "@/components/homepage/Featured-posts.component"
import Hero from "@/components/homepage/Hero.component"

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Hero/>
      <FeaturedPosts />
    </>
  )
}

export default Home