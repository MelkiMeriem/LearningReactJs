import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function BlogPostsPage(){
    const {state}=useLocation();
    const [posts,setPosts]=useState([]);
    useEffect(() => {
        if(state && state.posts){
            setPosts(state.posts)
            console.log(posts);
        }
    }, [state]);
    return(
        <>
        {posts.map((posts)=> (
                <div key={posts.id}>
                    <h1>{posts.content}</h1>
                    <h1>{posts.title}</h1>

                </div>
            )
        )}

        </>
    )
}

export default BlogPostsPage;