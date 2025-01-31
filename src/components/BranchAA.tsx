import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";
import "./BranchAAStyle.css"

export const BranchAA = () => {
    const {them} = useContext(MyContext);
    return (
        <div className={them}>
            <p>BranchAA</p>
        </div>
    );
};