'use client'
import Link from "next/link"
export default function ListItem({result}) {

    return (
        <div className="list-bg">
            {
                result.map((r,i)=>
                    <div className="list-item" key={i}>
                        <Link href={`detail/${r._id}`}>
                            <h4>{r.title}</h4>
                        </Link>
                        <Link href={`edit/${r._id}`}>✏️</Link>
                        <button onClick={(e)=>{
                            fetch('/api/post/delete',{
                                method:'DELETE',
                                body:r._id})
                            .then((r)=>{
                                if (!r.ok) {
                                    console.error('Invalid response data');
                                    return;
                                }
                                return  r.json()
                            })
                            .then(()=>{
                                e.target.parentElement.style.opacity=0
                                setTimeout(()=>{
                                    e.target.parentElement.style.display='none'
                                })
                            })
                            .catch((error) => {
                                console.error('Fetch error:', error)
                            })
                        }}>🗑️</button>
                        <p>1월 1일</p>
                    </div>
                )
            }
        </div>
    )

}