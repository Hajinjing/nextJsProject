import {connectDB} from "@/util/database";
import ListItem from "@/app/list/ListItem";

export const dynamic = 'force-dynamic' /*dynamic rendering을 위한 변수 선언*/
export default async function List() {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()

    return (
        <div className="list-bg">
            <ListItem result={result}/>
        </div>
    )
}

