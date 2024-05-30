import './globals.css'
import {UserContext} from "./utils/contexts/UserContext.jsx";
import PostContainer from "./Components/PostContainer.jsx";
import {useEffect, useState} from "react";
import useFetchUser from "./utils/hooks/useFetchUser.js";
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
            <UserContext.Provider value={user}>

                <div>
                    <PostContainer/>
                </div>

            </UserContext.Provider>
        </div>
   );

}

