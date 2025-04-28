import { useRecoilState, useRecoilValue } from "recoil"
import { selectedYearAtom } from "../recoil/selectedYear"


const YearSelector = () => {
    const [selectedYear, setSelectedYear] = useRecoilState(selectedYearAtom)

    const currentYear = new Date().getFullYear()
    const years = [currentYear, currentYear-1, currentYear-2]

    return (
        <div className="mb-4">
            <select className="border border-gray-400 rounded p-2 text-black" value={selectedYear}
            onChange={(e)=> setSelectedYear(Number(e.target.value))}
            name="" id="">
                {years.map((year)=> (
                    <option key={year} value={year}>
                        {year}년
                    </option>
                ))}
            </select>
        </div>
    )
}

export default YearSelector;