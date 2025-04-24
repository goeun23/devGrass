import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import CommitInput from './components/CommitInput';
import Calendar from './components/Calendar';
import CommitHistory from './components/CommitHistory';
function App() {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "min-h-screen bg-[#121212] text-white flex items-center justify-center p-6", children: [_jsx("div", { className: "min-h-screen bg-green-700 text-white flex items-center justify-center" }), _jsxs("div", { className: "w-full max-w-5xl flex flex-col items-center gap-8", children: [_jsx("h1", { className: "text-3xl font-bold text-center w-full", children: "\uD83C\uDF31 DevGrass! \uD83C\uDF31" }), _jsx(Calendar, {}), _jsx(CommitInput, {}), _jsx(CommitHistory, {})] })] }) }));
}
export default App;
