import Calendar from './components/Calendar';
import CommitInput from './components/CommitInput';
import CommitHistory from './components/CommitHistory';
import TodayBanner from './components/TodayBanner';
import TopCommitDays from './components/TopCommitDays';
import YearSelector from './components/YearSelector';
import MonthSelector from './components/MonthSelector'
import { useState } from 'react';

function App() {
    const [selectedDate, setSelectedDate] = useState<string>('');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
            <div className="w-full max-w-5xl flex flex-col items-center gap-8">
                <h1 className="text-3xl font-bold text-left w-full">DevGrass 🌱</h1>

                <TodayBanner />
                <TopCommitDays />
                <YearSelector/>
                <MonthSelector/>

                <Calendar 
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
                <CommitInput selectedDate={selectedDate} />
                <CommitHistory />
            </div>
        </div>
    );
}

export default App;
