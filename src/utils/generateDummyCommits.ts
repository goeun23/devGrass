import { faker } from "@faker-js/faker";
import { format } from "date-fns";
import { Commit } from "../recoil/types";


export const generateDummyCommits = (count:number):Commit[] => {
    const result:Commit[] = [];

    for(let i =0; i<count; i++){
        const date = format(faker.date.recent(90), 'yyyy-MM-dd');
        const message = faker.hacker.phrase()

        result.push({
            id:`dummy-${i}`, 
            date, 
            message
        })
    }
    return result;
}