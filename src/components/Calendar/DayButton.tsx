import { format } from "date-fns";
import { getCommitColor } from "../../utils/commitColor";

interface Props {
    date :Date;
    isSelected:boolean;
    count:number;
    onClick:(dateStr:string)=> void
}

const DayButton = ({date, isSelected, count, onClick}:Props)=> {
    let dateStr = '';
    try{
        dateStr = format(date,'yyyy-MM-dd')
    }catch(e){
        return null
    }
    
    const color = getCommitColor(count);

    return (
        <div className="relative group" key={dateStr}>
            <button
                onClick={()=> onClick(dateStr)}
                className={`w-full aspect-square p-1 rounded text-sm border text-center transition-colors
                    ${color}
                    ${isSelected ? 'ring-2 ring-green-500' : ''}
                    hover:brightness-110`}
                >
                  {format(date, 'dd')}
            </button>
        </div>
    )

}

export default DayButton;