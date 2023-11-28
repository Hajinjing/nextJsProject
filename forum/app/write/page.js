import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export default async function write() {
    let session = await getServerSession(authOptions)
    console.log("세션~~~~~~")
    console.log(session)
    if (!session) {
        return (
            <div>로그인하세요</div>
        )
    } else {
        return (
            <div>
                <h4>글작성</h4>
                <form action="/api/post/new" method="POST">
                    <input type="text" name="title" placeholder="글제목"/>
                    <input type="text" name="content" placeholder="글내용"/>
                    <button type="submit">버튼</button>
                </form>
            </div>
        )
    }
}