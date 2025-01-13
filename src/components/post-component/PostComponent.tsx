import {IPost} from "../../models/IPost.ts";

interface PostProps {
    item: IPost;
}

export const PostComponent = ({item}:PostProps) => {
    return (
        <div>
            <h3>{item.userId}.{item.title}</h3>

        </div>
    );
};