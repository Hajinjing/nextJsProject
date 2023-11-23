import {connectDB} from "@/util/database";

export default async function List() {

    const client = await connectDB;
    const db = client.db("forum")

    let result = await db.collection('post').find().toArray()

    return (
        <div className="list-bg">
            {
                result.map(r=>{
                    return (
                        <div className="list-item">
                            <h4>{r.title}</h4>
                            <p>{r.content}</p>
                        </div>

                    )
                })
            }
        </div>
    )
}

