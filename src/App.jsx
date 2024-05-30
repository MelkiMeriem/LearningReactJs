import './globals.css'
import {UserContext} from "./utils/contexts/UserContext.jsx";
import PostContainer from "./Components/PostContainer.jsx";
import {useEffect, useState} from "react";
import useFetchUser from "./utils/hooks/useFetchUser.js";
import {Outlet,Link,useNavigate} from "react-router-dom";

export default function App(){
    const {user,loading,error}=useFetchUser(2);

    const [userData,setUserData]=useState();
    {/* useNavigate() function is used to navigate between pages based on conditions*/}
    const navigate=useNavigate();
    useEffect(() => {
        if(!loading && !error && user){
            setUserData(user);
            navigate('/users');
        }
    }, [loading,error,user,navigate]);
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/users"}>Users</Link>
                    </li>
                    <li>
                        <Link to={"/login"}>Login</Link>
                    </li>
                    <li>
                        <Link to={"/blog-posts"}>Blog</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <label htmlFor={"data"}>Enter Data</label>
                <input type={"text"} id={"data"}
                       onChange={(e)=>{
                           if(e.target.value.length>10){
                               /* passing state to route*/
                               navigate('/blog-posts',
                                   {state:{
                                       posts:[
                                           {
                                           id:1,
                                           title:"hello world",
                                           content:"welcome to my first post",
                                           }

                                       ]
                                       }}
                                   )}
                       }}
                />
            </div>
            <UserContext.Provider value={user}>

            <div>
                    <PostContainer/>
                </div>

            </UserContext.Provider>

            <Outlet/>
        </div>
        // to display the content of the child route

    );

}

