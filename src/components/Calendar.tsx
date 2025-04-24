import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedDateAtom } from '../recoil/selectedDate';
import { commitsAtom, commitCountSelector } from '../recoil/commits';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from 'date-fns';
import { getCommitColor } from '../utils/commitColor';
import classNames from 'classnames';


const Calendar = () => {
  const setSelectedDate = useSetRecoilState(selectedDateAtom);
  const selectedDate = useRecoilValue(selectedDateAtom);
  const commits = useRecoilValue(commitsAtom);
  const commitCounts = useRecoilValue(commitCountSelector);

  const today = new Date();
  const start = startOfMonth(today);
  const end = endOfMonth(today);
  const days = eachDayOfInterval({ start, end });

  const startDayOfWeek = getDay(start); // 0: 일요일 ~ 6: 토요일
  const paddedDays = Array(startDayOfWeek).fill(null).concat(days);

  return (
    <div className="grid grid-cols-7 gap-2 w-full max-w-md mt-6">
      {paddedDays.map((day, index) => {
        if (!day) {
          return <div key={`empty-${index}`} />;
        }

        const dateStr = format(day, 'yyyy-MM-dd');
        const isSelected = selectedDate === dateStr;
        const count = commitCounts[dateStr] || 0;
        const color = getCommitColor(count);
        
        const messages = commits
          .filter((c) => c.date === dateStr)
          .map((c) => `• ${c.message}`)
          .join('\n');
        
        return (
          <div className="relative group" key={dateStr}>
           <button
      onClick={() => setSelectedDate(dateStr)}
      className={`w-full aspect-square p-1 rounded text-sm border text-center transition-colors
        ${color}
        ${isSelected ? 'ring-2 ring-green-500' : ''}
        hover:brightness-110`}
    >
              {format(day, 'd')}
            </button>

            {count > 0 && (
              <div className="absolute z-10 hidden group-hover:block bottom-full mb-1 left-1/2 transform -translate-x-1/2 w-40 bg-white text-black shadow-lg text-xs p-2 rounded border whitespace-pre-line">
                {messages}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
