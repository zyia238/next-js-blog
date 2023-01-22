// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient, ObjectId } from 'mongodb'

type Data = {
  msg:string,
  insertedData:{
    email:string,
    name:string,
    message:string,
    _id:ObjectId
  } | null
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const client = await MongoClient.connect('mongodb+srv://zyia238:kfewCfklWKgH1fEw@cluster0.ttweoyg.mongodb.net/contact?retryWrites=true&w=majority')
  if(req.method === 'POST'){
    try{
      const {email,name,message} = JSON.parse(req.body)
      const dataToBeInserted = {
        email:email,
        name,
        message
      }
      const db = client.db()
      const result = await db.collection('contactMessage').insertOne(dataToBeInserted)

      res.status(201).json({msg:"created",insertedData:{...dataToBeInserted,_id:result.insertedId}})
      client.close()
    }catch(error){
      res.status(500).json({msg:"Can not connect to databse",insertedData:null})
      client.close()
    }
  }
}
