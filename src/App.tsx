import './App.css'
import {useFetch} from "./hooks/useFetch.tsx";

function App() {
    const posts = useFetch<{ id: number, title: string, body: string }[]>('https://jsonplaceholder.typicode.com/posts', []);
    return (
        <>
            {
                // posts &&
                posts.map((post) => (
                <div key={post.id} className="App">
                    {post.title}{post.body}

                </div>
            ))
            }
        </>
    )
}

export default App
