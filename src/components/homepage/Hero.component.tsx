import classes from './hero.module.css'

import Image from 'next/image'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image priority src={require('@/assets/imgs/photo.png')} alt="avatar" width={300} height={300}/>
        </div>
        <h1>
            Hi, I am Yiang
        </h1>
        <p>
            Welcome to my next.js project
        </p>
    </section>
  )
}

export default Hero