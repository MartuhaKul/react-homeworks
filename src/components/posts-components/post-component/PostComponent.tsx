import {IPost} from "../../../models/IPost.ts";

interface IPostProps {
    item: IPost,

}

export const PostComponent = ({item}: IPostProps) => {
    return (
        <div>
            {item.id}.
            {item.title}
        </div>
    );
};