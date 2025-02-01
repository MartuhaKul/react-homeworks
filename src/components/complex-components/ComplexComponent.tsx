import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/UserSlice.ts";
import {postActions} from "../../redux/slices/PostSlice.ts";
import {commentActions} from "../../redux/slices/CommentSlice.ts";
import {UsersComponent} from "../users-components/users-component/UsersComponent.tsx";
import {PostsComponent} from "../posts-components/posts-component/PostsComponent.tsx";
import {CommentsComponent} from "../comments-components/comments-component/CommentsComponent.tsx";

export const ComplexComponent = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userStoreSlice.users);
    const posts = useAppSelector((state) => state.postStoreSlice.posts);
    const comments = useAppSelector((state) => state.commentStoreSlice.comments);

    useEffect(() => {
        if(users.length === 0) dispatch(userActions.loadUsers());
        if(posts.length === 0) dispatch(postActions.loadPosts());
        if(comments.length === 0) dispatch(commentActions.loadComments());
    }, []);
    return (
        <div>
            <h2>Complex Page</h2>
            {users.length === 0 || posts.length === 0 || comments.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <UsersComponent/>
                    <PostsComponent/>
                    <CommentsComponent/>
                </div>
            )}
        </div>
    );
};