import { MongoClient } from "mongodb"
import {connectDB} from "@/util/database";
export default async function Home() {

  const client = await connectDB;
  const db = client.db("forum")

  let result = await db.collection('post').find().toArray()
  // await fetch('/URL', {cache:'force-cache'}) /*캐싱기능*/
  // await fetch('/URL', {cache:'no-store'}) /*매번 새로 요청*/
  // await fetch('/URL', {next:{revalidate : 60}}) /*60초마다 새로 요청*/

  return (
      <div>안녕</div>

  )
}
