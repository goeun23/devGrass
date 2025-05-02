import { isValid } from "date-fns"
import { useMemo } from "react";

export const useValidation = (message:string) => {
    const result = useMemo(()=> {
        if(message.trim().length < 2){
            return {isValid:false, error:'메세지는 최소 2자 이상이어야 합니다.'}
        }

        const banned = ['욕설', 'test', 'dummy'];
        if(banned.some(word=> message.includes(word))){
            return {isValid : false, error:'부적절한 단어가 포함되어 있습니다.'};
        }

        return {isValid:true, error:''};
    }, [message])

    return result;
}