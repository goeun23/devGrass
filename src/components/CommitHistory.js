import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRecoilState } from "recoil";
import { commitsAtom } from "../recoil/commits";
import { format } from "date-fns";
const CommitHistory = () => {
    const [commits, setCommits] = useRecoilState(commitsAtom);
    const sorted = [...commits].sort((a, b) => a.date === b.date ? 0 : a.date > b.date ? -1 : 1);
    const handleDelete = (index) => {
        const updated = [...commits];
        updated.splice(index, 1);
        setCommits(updated);
    };
    return (_jsxs("div", { className: "w-full max-w-md mt-10 p-4 bg-white shadow rounded", children: [_jsx("h2", { className: "text-lg font-semibold mb-3 text-gray-700", children: "\uD83D\uDCDC \uCEE4\uBC0B \uD788\uC2A4\uD1A0\uB9AC" }), sorted.length === 0 ? (_jsx("p", { className: "text-sm text-gray-400", children: "\uC544\uC9C1 \uCEE4\uBC0B\uC774 \uC5C6\uC5B4\uC694." })) : (_jsx("ul", { className: "space-y-2", children: sorted.map((commit, idx) => (_jsxs("li", { className: "text-sm text-gray-800 flex justify-between items-start gap-2", children: [_jsxs("div", { children: [_jsx("div", { className: "text-green-600 font-medium", children: format(new Date(commit.date), 'yyyy-MM-dd') }), _jsx("div", { children: commit.message })] }), _jsx("button", { onClick: () => handleDelete(commits.indexOf(commit)), className: "text-red-400 hover:text-red-600 text-xs", children: "\uC0AD\uC81C" })] }, `${commit.date}-${idx}`))) }))] }));
};
export default CommitHistory;
