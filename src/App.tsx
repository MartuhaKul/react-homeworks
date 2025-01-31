import './App.css'
import {BranchA} from "./components/BranchA.tsx";
import {BranchB} from "./components/BranchB.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";

function App() {
    const [themColor, setThemColor] = useState<string>('light')

    return (
        <>
            <MyContext.Provider value={{
                them: themColor,
                changeThem: (them:string)=>{
                    setThemColor(them)
                }
            }}>

            <BranchA/>
            <BranchB/>
            </MyContext.Provider>
        </>
    )
}

export default App
