import {PaginationComponent} from "../../components/pagination/PaginationComponent.tsx";
import {UsersComponent} from "../../components/users-component/UsersComponent.tsx";
import "./UserPageStyle.css"

export const UsersPage = () => {
    return (
        <>
            <div className='grid'><UsersComponent/></div>
            <PaginationComponent/>
        </>
    );
};