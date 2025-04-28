import {atom, selector} from 'recoil';
import {Commit} from './types'

const localStorageKey = 'devgrass-commits';

const loadInitialCommits = (): Commit[] => {
    try{
        const saved = localStorage.getItem(localStorageKey);
        if(!saved) return [];
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : [];
    }
    catch{
        return [];
    }
}

export const commitsAtom = atom<Commit[]>({
    key:'commitsAtom', 
    default : loadInitialCommits(), 
    effects: [
        ({onSet}) => {
            onSet((newCommits)=> {
                localStorage.setItem(localStorageKey, JSON.stringify(newCommits))
            })
        }
    ]
})

// 날짜별 커밋 수 계산용 selector
export const commitCountSelector = selector({
    key: 'commitCountSelector', 
    get : ({get}) => {
        const commits = get(commitsAtom);
        const countMap: Record<string, number> = {};

        commits.forEach(({date})=> {
            countMap[date] = (countMap[date] || 0) +1;
        });

        return countMap;
    }
})