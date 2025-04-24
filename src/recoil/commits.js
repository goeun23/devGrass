import { atom, selector } from 'recoil';
const localStorageKey = 'devgrass-commits';
const loadInitialCommits = () => {
    try {
        const saved = localStorage.getItem(localStorageKey);
        return saved ? JSON.parse(saved) : [];
    }
    catch {
        return [];
    }
};
export const commitsAtom = atom({
    key: 'commitsAtom',
    default: loadInitialCommits(),
    effects: [
        ({ onSet }) => {
            onSet((newCommits) => {
                localStorage.setItem(localStorageKey, JSON.stringify(newCommits));
            });
        }
    ]
});
// 날짜별 커밋 수 계산용 selector
export const commitCountSelector = selector({
    key: 'commitCountSelector',
    get: ({ get }) => {
        const commits = get(commitsAtom);
        const countMap = {};
        commits.forEach(({ date }) => {
            countMap[date] = (countMap[date] || 0) + 1;
        });
        return countMap;
    }
});
