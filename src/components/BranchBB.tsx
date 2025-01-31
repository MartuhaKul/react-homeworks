import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const BranchBB = () => {
    const {changeThem} = useContext(MyContext);

    const handlerDark = () => {
        changeThem('dark');
    };
    const handlerLight = () => {
        changeThem('light');
    };
    return (
        <div>
            <button onClick={handlerDark}>dark</button>
            <button onClick={handlerLight}>light</button>
        </div>
    );
};