import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/store.ts";
import {commentActions} from "../../../redux/slices/CommentSlice.ts";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";
import {IComment} from "../../../models/IComment.ts";

export const CommentsComponent = () => {

    const dispatch = useAppDispatch();
    const comments = useAppSelector((state) => state.commentStoreSlice.comments);
    useEffect(() => {
        dispatch(commentActions.loadComments());
    }, []);
    return (
        <div>
            {comments.map((comment:IComment) => (<CommentComponent key={comment.id} item={comment} />))}
        </div>
    );
};