import { useRecoilValue } from "recoil"
import { commitsAtom } from "../../recoil/commits"
import { format } from "date-fns";

const TodayBanner = () => {
    const commits = useRecoilValue(commitsAtom);    
    const today = format(new Date(), 'yyyy-MM-dd');

    const didCommitToday = commits.some((commit)=> {
        return commit.date === today;
    });
    
    if(didCommitToday) return null;

    return (
        <div className="bg-yellow-400 text-black text-center py-2 rounded mb-4 w-full">
            🌱 오늘 아직 커밋 안 했어요! 커밋을 남겨보세요!
        </div> 
    )
}

export default TodayBanner;