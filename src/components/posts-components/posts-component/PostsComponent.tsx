import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/store.ts";
import {postActions} from "../../../redux/slices/PostSlice.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";
import {IPost} from "../../../models/IPost.ts";

export const PostsComponent = () => {
const dispatch = useAppDispatch();
const posts = useAppSelector((state) =>state.postStoreSlice.posts );
    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, []);
    return (
        <div>
            {posts.map((post:IPost) => (<PostComponent key ={post.id} item={post} />))}
        </div>
    );
};