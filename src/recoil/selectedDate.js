// 현재 선택된 날짜 저장
import { atom } from 'recoil';
export const selectedDateAtom = atom({
    key: 'selectedDateAtom',
    default: '' // yyyy-mm-dd
});
