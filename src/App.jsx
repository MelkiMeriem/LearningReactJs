import './globals.css'
import {UserContext} from "./utils/contexts/UserContext.jsx";
import PostContainer from "./Components/PostContainer.jsx";
import {useState} from "react";
export default function App(){
    const [userData,setUserData]=useState({
        id:1,
        username: "M_M",
        email: "melkimariem150@gmail.com",
        displayName: "Melki Mariem",
    });
    return(
        <div>
            <UserContext.Provider value={{
                ...userData,
                setUserData

            }}>
                <div>
                    <PostContainer/>

                </div>

            </UserContext.Provider>
        </div>
   );

}

