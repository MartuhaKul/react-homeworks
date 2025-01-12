import {useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import {getPosts} from "../../services/posts.api.service.ts";
import {PostComponent} from "./PostComponent.tsx";

export const PostsComponents = () => {

    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getPosts().then(({posts}) => setPosts(posts))
    })

    return (
        <>
            {
                posts.map((value) => <PostComponent key={value.id} item={value}/>)
            }
        </>
    );
};