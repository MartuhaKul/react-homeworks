import {PostsComponents} from "../components/posts-components/PostsComponents.tsx";
import "./PageCss.css";

export const PostsPage = () => {
    return (
        <div>
            <h2 className='text-2xl'>Posts page</h2>
            <div className='wrapper text-l'>
                <PostsComponents/>
            </div>
        </div>
    );
};