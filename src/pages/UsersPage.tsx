import {UsersComponents} from "../components/users-components/UsersComponents.tsx";
import "./PageCss.css";

export const UsersPage = () => {
    return (
        <div>
            <h2 className='text-2xl'>Users page</h2>
            <div className='wrapper text-xl'>
                <UsersComponents/>
            </div>
        </div>
    );
};