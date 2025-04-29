import { Commit } from "../recoil/types";


const STORAGE_KEY="commits"

export const fetchCommitFromStorage = ():Commit[] => {
    if(typeof window === 'undefined') return [];
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
}

export const saveCommitsToStorage = (commits:Commit[])=> {
    if(typeof window !== 'undefined'){
        localStorage.setItem(STORAGE_KEY, JSON.stringify(commits))
    }
}
