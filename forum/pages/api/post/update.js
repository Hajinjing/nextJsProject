import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb"

export default async function handler(요청, 응답) {
    if (요청.method == 'POST') {
        console.log(요청.body)
        if (요청.body.title == '') {
            return 응답.status(500).json('제목 입력해')
        }
        try {
            const db = (await connectDB).db("forum")
            let update = await db.collection('post').updateOne({_id:new ObjectId(요청.body._id)},
                {$set : { title : 요청.body.title, content:요청.body.content}}) /*db에 업데이트*/
            응답.redirect(302,'/list')
        } catch (error) {
            console.log(error)
            응답.status(500).json('수정실패')
        }
    }
}