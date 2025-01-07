import {ITodo} from "../../models/ITodo";
import "./TodoComponent.css"

interface TodoProps {
    item: ITodo,
}

export const TodoComponent = ({item}: TodoProps) => {
    return (
        <div className='flex'>
            <h3 className={`${item.completed ? 'completed' : 'not-completed'} text-xl mb-2.5`}>
                {item.todo}
            </h3>
        </div>
    );
};
