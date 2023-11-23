// 'use client'
import {connectDB} from "@/util/database";
import Link from "next/link"
import DetailLink from "@/app/list/DetailLink";
export default async function List() {

    const client = await connectDB;
    const db = client.db("forum")

    let result = await db.collection('post').find().toArray()
    console.log(result[0]._id)

    return (
        <div className="list-bg">
            {
                result.map((r,i)=>

                        <div className="list-item" key={i}>
                            <Link href={`detail/${r._id}`}>
                                <h4>{r.title}</h4>
                            </Link>
                            <DetailLink/>
                            <p>1월 1일</p>
                        </div>
                )
            }
        </div>
    )
}

