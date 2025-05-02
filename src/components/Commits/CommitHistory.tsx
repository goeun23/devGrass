import { useRecoilState, useRecoilValue } from "recoil";
import { commitsAtom } from "../../recoil/commits";
import { format } from "date-fns";
import { selectedMonthAtom } from "../../recoil/selectedMonth";
import { selectedYearAtom } from "../../recoil/selectedYear";
import { useCommits } from "../../hooks/useCommit";
import CommitItem from "./CommitItem";

const CommitHistory = () => {
    const [commits, setCommits] = useRecoilState(commitsAtom);
    let selectedMonth = useRecoilValue(selectedMonthAtom);
    const selectedYear = useRecoilValue(selectedYearAtom);
    const { deleteCommit, resetCommits } = useCommits();
    
    const YYMM = `${selectedYear}-${selectedMonth< 10 ? "0"+selectedMonth : selectedMonth}`
    
    // 캘린더 선택 YYMM만 필터링하여 노출
    const filetedHistory = [...commits].filter(x=> {
        return format(new Date(x.date), 'yyyy-MM') === YYMM;
    })
    const sorted = [...filetedHistory].sort((a,b)=> 
        a.date === b.date ? 0 : a.date > b.date ? -1:1
    );
    
    // 특정 커밋 삭제
    const handleDelete = (index:string) => {
        deleteCommit(index)
    }

    // 모든 커밋 삭제
    const resetHistory = () => {
        resetCommits();
    }
    
    return (
        <div className="w-full max-w-md mt-10 p-4 bg-white shadow rounded">
           <h2 className="text-lg font-semibold mb-3 text-gray-700">📜 커밋 히스토리
           <button
                className="text-red-400 hover:text-red-600 text-xs"
                onClick={()=> resetHistory()}>
                비우기
            </button>
           </h2>
            {sorted.length === 0 ? (
                <p className="text-sm text-gray-400">아직 커밋이 없어요.</p>
            ) : (
                <ul className="space-y-2">
                    
                    {sorted.map(({ id, date, message }) => (
                        <CommitItem
                        key={id}
                        id={id}
                        date={date}
                        message={message}
                        onDelete={deleteCommit}
                        />
                    ))}
                </ul>
            )} 
            
        </div>
    )
}



export default CommitHistory;
