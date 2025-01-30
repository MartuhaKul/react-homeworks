import {FC, memo} from "react";

//мемо запобігає зайвим рірендам
export const UserComponent: FC<{ foo: () => void, arr: number[] }> = memo(({arr}) => {
    console.log('user')
    console.log(arr)
    return (
        <div>
            <p>UserComponent</p>

        </div>
    );
});