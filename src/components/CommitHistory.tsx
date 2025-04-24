import { useRecoilState } from "recoil";
import { commitsAtom } from "../recoil/commits";
import { format } from "date-fns";

const CommitHistory = () => {
    const [commits, setCommits] = useRecoilState(commitsAtom);
    
    const sorted = [...commits].sort((a,b)=> 
        a.date === b.date ? 0 : a.date > b.date ? -1:1
    );

    const handleDelete = (index:any) => {
        const updated = [...commits];
        updated.splice(index, 1);
        setCommits(updated);
    }
    
    return (
        <div className="w-full max-w-md mt-10 p-4 bg-white shadow rounded">
           <h2 className="text-lg font-semibold mb-3 text-gray-700">📜 커밋 히스토리</h2>
            {sorted.length === 0 ? (
                <p className="text-sm text-gray-400">아직 커밋이 없어요.</p>
            ) : (
                <ul className="space-y-2">
                {sorted.map((commit, idx) => (
                    <li key={`${commit.date}-${idx}`} className="text-sm text-gray-800 flex justify-between items-start gap-2">
                    <div>
                        <div className="text-green-600 font-medium">{format(new Date(commit.date), 'yyyy-MM-dd')}</div>
                        <div>{commit.message}</div>
                    </div>
                    <button
                        onClick={() => handleDelete(commits.indexOf(commit))}
                        className="text-red-400 hover:text-red-600 text-xs"
                    >
                        삭제
                    </button>
                    </li>
                ))}
                </ul>
            )} 
        </div>
    )
}



export default CommitHistory;
