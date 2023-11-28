import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb"
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
export default async function handler(요청, 응답) {
    let session = await getServerSession(요청, 응답, authOptions)
    if (session) {
        if (요청.method == 'DELETE') {
            try {
                const db = (await connectDB).db("forum")
                let find = await db.collection('post').findOne({_id: new ObjectId(요청.body)})
                console.log(session)
                console.log(session.user.role)
                if(find.author==session.user.email || session.user.role == 'admin') {
                    console.log('관리자????')
                    console.log(session.user.role)
                    let result = await db.collection('post').deleteOne({_id:new ObjectId(요청.body)}) /*db에 업데이트*/
                    return 응답.status(200).json('삭제성공')
                } else {
                    console.log('작성자만 삭제할 수 있습니다')
                    return 응답.status(500).json('작성자만 삭제할 수 있습니다')
                }
            } catch (error) {
                return 응답.status(500).json('삭제실패')
            }
        }
    } else {
        console.log('로그인하세요')
        return 응답.status(500).json('로그인하세요')
    }
}