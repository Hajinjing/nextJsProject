import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
    let name = 'park'
    let link = 'http://naver.com'
    return (
        <div>
            <div>
                {/*<h4 style={{ color:'red', fontSize:'30px' }}>애플후레시</h4> object자료형으로 style*/}
                <h4 className="title">애플후레시</h4>
                <p className="title-sub">by dev {name}</p>
                <a href={link}>링크</a>
            </div>
        </div>

    )
}
