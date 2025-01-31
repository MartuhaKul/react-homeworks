import {createContext} from "react";

type MyContextType = {
    them:string,
    changeThem: (them:string) => void,
}
const defaultValue:MyContextType = {
    them: 'light',
    changeThem: (them:string) => {
        console.log(them);
    }
};
export const MyContext = createContext<MyContextType>(defaultValue);