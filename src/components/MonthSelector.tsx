import { useRecoilState, useRecoilValue } from "recoil"
import { selectedMonthAtom } from "../recoil/selectedMonth"


const MonthSelector = () => {
    const [selectedMonth, setSelectedMonth] = useRecoilState(selectedMonthAtom)

    const currentYear = new Date().getFullYear()
    let months = [];
    for(let i =0; i<12; i++){
        
        months.push({
            key: i+1 + '월', 
            value: i+1
        })
    }
    

    return (
        <div className="mb-4">
            <select className="border border-gray-400 rounded p-2 text-black" value={selectedMonth}
            onChange={(e)=> setSelectedMonth(Number(e.target.value))}
            name="" id="">
                {months.map((months)=> (
                    <option key={months.key} value={months.value}>
                        {months.value}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default MonthSelector;