import {useRecoilState, useRecoilValue} from 'recoil';
import { commitsAtom } from '../recoil/commits';
import { selectedDateAtom } from '../recoil/selectedDate';
import { useState } from 'react';

const CommitInput = () => {
    const [commits, setCommits] = useRecoilState(commitsAtom);
    const selectedDate = useRecoilValue(selectedDateAtom);
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
      console.log(selectedDate)
        if(!selectedDate){
          alert("날짜를 선택해주세요.")
          return;
        } 
        if(message.trim() === '') {
          alert('메세지를 입력해주세요.')
          return;
        }

        setCommits([
            ...commits, 
            {date : selectedDate, message}
        ]);

        setMessage('')
    }
    
    const activeEnter = (e:any) => {
      if(e.key === 'Enter'){
        handleSubmit();
      }
    }

    return (
        <div className="p-4 border rounded bg-white shadow w-full max-w-md">
          <div className="mb-2 text-gray-700">
            <strong>날짜:</strong> {selectedDate || '날짜를 선택해주세요'}
          </div>
          <textarea
            className="w-full bg-gray-800 text-white border border-gray-600 p-2 rounded resize-none"
            rows={3}
            placeholder="오늘의 커밋 메시지를 입력하세요"
            value={message}
            onKeyDown={(e)=> activeEnter(e)}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleSubmit}
            disabled={!selectedDate}
          >
            커밋 남기기
          </button>
        </div>
    )
}



export default CommitInput;