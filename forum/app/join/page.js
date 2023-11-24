export default function join() {
    return (
        <div>
            <h4>회원가입</h4>
            <form action="/api/member/join" method="POST">
                <input type="text" name="id" placeholder="아이디를 입력하세요"/>
                <input type="text" name="pw" placeholder="패스워드를 입력하세요"/>
                <button type="submit">가입</button>
            </form>
        </div>
    )

}