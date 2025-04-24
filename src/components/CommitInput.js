import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRecoilState, useRecoilValue } from 'recoil';
import { commitsAtom } from '../recoil/commits';
import { selectedDateAtom } from '../recoil/selectedDate';
import { useState } from 'react';
const CommitInput = () => {
    const [commits, setCommits] = useRecoilState(commitsAtom);
    const selectedDate = useRecoilValue(selectedDateAtom);
    const [message, setMessage] = useState('');
    const handleSubmit = () => {
        if (!selectedDate || message.trim() === '')
            return;
        setCommits([
            ...commits,
            { date: selectedDate, message }
        ]);
        setMessage('');
    };
    const activeEnter = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };
    return (_jsxs("div", { className: "p-4 border rounded bg-white shadow w-full max-w-md", children: [_jsxs("div", { className: "mb-2 text-gray-700", children: [_jsx("strong", { children: "\uB0A0\uC9DC:" }), " ", selectedDate || '날짜를 선택해주세요'] }), _jsx("textarea", { className: "w-full bg-gray-800 text-white border border-gray-600 p-2 rounded resize-none", rows: 3, placeholder: "\uC624\uB298\uC758 \uCEE4\uBC0B \uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694", value: message, onKeyDown: (e) => activeEnter(e), onChange: (e) => setMessage(e.target.value) }), _jsx("button", { className: "mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600", onClick: handleSubmit, disabled: !selectedDate, children: "\uCEE4\uBC0B \uB0A8\uAE30\uAE30" })] }));
};
export default CommitInput;
