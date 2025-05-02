import Calendar from './components/Calendar/Calendar';
import CommitInput from './components/Commits/CommitInput';
import CommitHistory from './components/Commits/CommitHistory';
import TodayBanner from './components/layout/TodayBanner';
import TopCommitDays from './components/TopCommitDays';
import YearSelector from './components/Selector/YearSelector';
import MonthSelector from './components/Selector/MonthSelector'

import { generateDummyCommits } from './utils/generateDummyCommits';
import { saveCommitsToStorage } from './utils/commitStorage';
import { useEffect } from 'react';


function App() {
    
    useEffect(() => {
        //if (process.env.NODE_ENV === 'development') {
          const lastInjected = localStorage.getItem('dummyInjectedDate');
          const today = new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'
      
          if (lastInjected === today) return; // 🔒 이미 오늘 주입했으면 스킵
      
          const saved = localStorage.getItem('commits');
          if (!saved) {
            const dummy = generateDummyCommits(1000);
            saveCommitsToStorage(dummy);
            localStorage.setItem('dummyInjectedDate', today); // ✅ 오늘 날짜 기록
            console.log('💡 더미 커밋 1000개 주입 완료');
            location.reload();
          }
        //}
      }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
            <div className="w-full max-w-5xl flex flex-col items-center gap-8">
                <h1 className="text-3xl font-bold text-left w-full">DevGrass 🌱</h1>

                <TodayBanner />
                <TopCommitDays />
                <YearSelector/>
                <MonthSelector/>

                <Calendar/>
                <CommitInput/>
                <CommitHistory />
            </div>
        </div>
    );
}

export default App;
