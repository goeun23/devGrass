import { format } from "date-fns";

interface Props {
    id:string;
    date:string;
    message:string;
    onDelete:(id:string) => void
}

const CommitItem = ({id, date, message, onDelete}:Props)=> {
    return (
        <li className="text-sm text-gray-800 flex justify-between items-start gap-2">
            <div>
                <div className="text-green-600 font-medium">
                    {format(new Date(date), 'yyyy-MM-dd')}
                </div>
                <div>{message}</div>
            </div>
            <button
            onClick={()=> onDelete(id)}
            className="text-red-400 hover:text-red-600 text-xs"
            >삭제</button>
        </li>
    )
}

export default CommitItem;