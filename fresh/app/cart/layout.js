import '../globals.css'

export default function Layout({ children }) {
  return (
        <div>
          <p>현대카드 무이자이벤트중</p>
            {children} {/*페이지가 들어가는 부분, */}
        </div>
  )
}
