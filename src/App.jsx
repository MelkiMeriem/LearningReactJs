import './globals.css'
import {useState} from "react";
export default function App(){
    const [blogPostData,setBlogPostData]=useState({
        title: "",
        body: "",

    });
    return(
    <div>
        <form
              onSubmit={(e)=>{
                  e.preventDefault();
                  if(blogPostData.title && blogPostData.body){
                      fetch("https://jsonplaceholder.typicode.com/posts", {
                          method:"POST",
                          body:JSON.stringify({
                              userId:1,
                              title:blogPostData.title,
                              body:blogPostData.body,
                          }),
                          headers:{
                              'Content-type': 'application/json; charset=UTF-8',

                          }
                          }
                          ).then((response) => response.json())
                          .then((json) => console.log(json))
                          .then(()=>console.log("success"))
                  }

              }}

        >

            <label htmlFor={"title"}>Title</label>
            <input name="title" id="title" type="text" value={blogPostData.title}
                   onChange={
                       (e)=>{
                           setBlogPostData((currentBlogPostData)=>({
                               ...currentBlogPostData,
                               title: e.target.value,}))
                       }
                   }
            /><br/>
            <label htmlFor={"body"} >Body</label>
            <input type="text" name="body" id="body" value={blogPostData.body}
                   onChange={
                       (e)=>{
                           setBlogPostData(
                               (currentBlogPostData)=> ({
                               ...currentBlogPostData,
                              body: e.target.value}));
                       }

                   }
            /><br/>
            <button>Post</button>
        </form>


    </div>);

}

