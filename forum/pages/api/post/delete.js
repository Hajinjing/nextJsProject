import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb"
export default async function handler(요청, 응답) {
    if (요청.method == 'DELETE') {
        try {
            const db = (await connectDB).db("forum")
            let result = await db.collection('post').deleteOne({_id:new ObjectId(요청.body)}) /*db에 업데이트*/
            응답.status(200).json('삭제성공')
        } catch (error) {
            console.log(error)
            응답.status(500).json('삭제실패')
        }
    }
}