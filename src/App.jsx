import './globals.css'
import {UserContext} from "./utils/contexts/UserContext.jsx";
import PostContainer from "./Components/PostContainer.jsx";
import {useEffect, useState} from "react";
import useFetchUser from "./utils/hooks/useFetchUser.js";
import {Outlet,Link} from "react-router-dom";

export default function App(){
    const {user,loading,error}=useFetchUser(2);

    const [userData,setUserData]=useState();
    useEffect(() => {
        if(!loading && !error && user){
            setUserData(user);
        }
    }, [loading,error,user]);
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
                </ul>
            </nav>
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

