import {connectDB} from "@/util/database";
import bcrypt from 'bcrypt'

export default async function handler(요청, 응답) {
    if(요청.method == 'POST') {
        // const email = 요청.body.email;
        // const password = 요청.body.password;
        // const name = 요청.body.name;
        //
        // const 에러메시지 = {
        //     이메일: '이메일을 입력해주세요',
        //     비밀번호: '비밀번호를 입력해주세요',
        //     이름: '이름을 입력해주세요',
        // };
        //
        // const 에러필드 = email === '' ? '이메일' : password === '' ? '비밀번호' : name === '' ? '이름' : null;
        //
        // if (에러필드) {
        //     return 응답.status(500).json(에러메시지[에러필드]);
        // }
        if (요청.body.email == '') {
            return 응답.status(500).json('이메일을 입력해주세요')
        } else if (요청.body.password == '') {
            return 응답.status(500).json('비밀번호를 입력해주세요')
        } else if (요청.body.name == '') {
            return 응답.status(500).json('이름을 입력해주세요')
        }
        let hash = await bcrypt.hash(요청.body.password, 10) /*암호화*/
        요청.body.password = hash
        let db = (await connectDB).db("forum")
        let temp =  await db.collection('user_cred').findOne({email:요청.body.email})
        if (temp != null) {
            return 응답.status(500).json('이미 존재하는 계정입니다.')
        } else {
            await db.collection('user_cred').insertOne(요청.body)
            응답.status(200).json('가입성공')
            // 응답.redirect(302,'/join')
        }



    }

};