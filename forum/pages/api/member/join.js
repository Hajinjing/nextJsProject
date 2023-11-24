import {connectDB} from "@/util/database";

export default async function handler(요청, 응답) {
    if (요청.method == 'POST') {
        console.log(요청.body)
        if (요청.body.id == '') {
            return 응답.status(500).json('아이디 입력해')
        } else if (요청.body.pw == '') {
            return 응답.status(500).json('비밀번호 입력해')
        }

        try {
            const db = (await connectDB).db("forum")
            let temp = await db.collection('member').find().toArray()

            // temp.map(a=>{if(a.id==요청.body.id) {
            //     return 응답.status(500).json('이미 존재하는 아이디 입니다.')
            // }})


            let temp2 =  await db.collection('member').findOne({id:요청.body.id})
            if (temp2 != null) {
                return 응답.status(500).json('이미 존재하는 아이디 입니다.')
            } else {
                let result = await db.collection('member').insertOne(요청.body)
                응답.redirect(302,'/join')
            }
        } catch (error) {
            응답.status(500).json('저장실패')
        }


    }
}