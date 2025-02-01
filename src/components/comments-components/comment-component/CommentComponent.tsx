import {IComment} from "../../../models/IComment.ts";

interface ICommentProps {
    item: IComment;
}

export const CommentComponent = ({item}:ICommentProps) => {
    return (
        <div>
            {item.id}
            {item.body}
        </div>
    );
};