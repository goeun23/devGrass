import {atom} from 'recoil'

export const selectedMonthAtom = atom<number>({
    key:'selectedMonth', 
    default : new Date().getMonth()
})