import fs from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(),'src','posts')

export const getPostData = async (filename:string) => {
    const filePath = join(postsDirectory,filename)
    const fileData = await fs.readFile(filePath,'utf-8')
    const { data , content } = matter(fileData)
    return {
        data,
        content,
    }
} 

type postData = {
    data: {
        [key: string]: any;
    };
    content: string;
}
export const getAllPosts = async () => {
    const postsArr = await fs.readdir(postsDirectory)
    const postDataArr: Array<postData> = []
    for(const post of postsArr){
        const data = await getPostData(post)
        postDataArr.push(data)
    }

    return postDataArr
}

export const getFeaturedPosts = async () => {
    const postarr = await getAllPosts()
    
    return postarr.filter(postdata => {
        return postdata.data.isFeatured === true
    })
}