import Link from "next/link"
import Image from "next/image"
import classes from './post-item.module.css'

type Props = {
    title:string,
    image:string,
    excerpt:string,
    date:string,
    slug:string
}

const PostItem = ({title,image,excerpt,date,slug}: Props) => {
  const fullImagePath = `/images/posts/${image}`

  return (
    <li className={classes.post}>
        <Link href={`/posts/${slug}`}>
            <div className={classes.image}>
                <Image src={fullImagePath} alt={title} width={300} height={200} layout="responsive" priority/>
            </div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <time>111</time>
                <p>{excerpt}</p>
            </div>
        </Link>
    </li>
  )
}

export default PostItem