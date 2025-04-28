import {atom} from 'recoil'

export const selectedYearAtom = atom<number>({
    key:'selectedYear', 
    default : new Date().getFullYear()
})