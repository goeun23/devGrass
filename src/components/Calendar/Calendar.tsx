import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedYearAtom } from '../../recoil/selectedYear';
import { selectedMonthAtom } from '../../recoil/selectedMonth';
import { selectedDateAtom } from '../../recoil/selectedDate';
import { commitsAtom, commitCountSelector } from '../../recoil/commits';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, getDay } from 'date-fns';
import { getCommitColor } from '../../utils/commitColor';
import { Commit } from '../../recoil/types';
import { useMemo } from 'react';
import DayButton from './DayButton';

const Calendar = ({}) => {
  const selectedYear = useRecoilValue(selectedYearAtom);
  const selectedMonth = useRecoilValue(selectedMonthAtom);
  const selectedDate = useRecoilValue(selectedDateAtom);
  const setSelectedDate = useSetRecoilState(selectedDateAtom);
  const commits = useRecoilValue(commitsAtom)
  const commitCounts = useMemo(()=> {
      return commits.reduce<Record<string, number>>((acc, commit)=> {
        acc[commit.date] = (acc[commit.date] || 0) +1;
        return acc;
      }, {})
  }, [commits])
  
  const start = startOfMonth(new Date(selectedYear, selectedMonth - 1));
  const end = endOfMonth(new Date(selectedYear, selectedMonth - 1));
  const days = eachDayOfInterval({ start, end });

  const startDayOfWeek = getDay(start);
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
        

        return (
          <DayButton
            key={dateStr}
            day={day}
            isSelected={isSelected}
            count={count}
            onClick={selectedDate}
          />
        );
      })}
    </div>
  );
};

export default Calendar;
