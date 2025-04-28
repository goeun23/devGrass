import { useRecoilValue } from "recoil"
import { commitsAtom } from "../recoil/commits"
import { Commit } from "../recoil/types";
import { format } from "date-fns";


const TopCommitDays = () => {
    const commits = useRecoilValue<Commit[]>(commitsAtom);

    const today = new Date();

    const lastMonth = new Date(today.getFullYear(), today.getMonth()-1, today.getDate())

    // 최근 1달 커밋 필터링
    const recentCommits = commits.filter((commit)=> {
        const commitDate = new Date(commit.date);
        return commitDate >= lastMonth && commitDate <= today;
    })

    // 날짜별 커밋 수 집계
    const commitCountByDate = recentCommits.reduce<Record<string, number>>((acc, commit)=> {
        acc[commit.date] = (acc[commit.date]|| 0) + 1
        return acc;
    }, {});

    // 많이 한 순 정렬 후 top3 집계
    const topDates :[string, number][] = Object.entries(commitCountByDate)
    .sort((a,b)=> b[1]- a[1])
    .slice(0,3)

    if(topDates.length === 0) return null;

    return (
        <div className="w-full bg-blue-100 text-blue-900 rounded p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">🔥 지난 한 달 커밋 랭킹</h2>
            <ul className="list-disc list-inside text-sm">
                {topDates.map(([date, count]) => (
                <li key={date}>
                    {format(new Date(date), 'yyyy-MM-dd')} — {count} 커밋
                </li>
                ))}
            </ul>
        </div>
    )
}

export default TopCommitDays;