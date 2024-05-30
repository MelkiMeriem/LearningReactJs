import './globals.css'
import {UserContext} from "./utils/contexts/UserContext.jsx";
import PostContainer from "./Components/PostContainer.jsx";
export default function App(){
//All the components in the userContext Provider ( even the child of those components)
// can access the value of the userContext
    return(
        <div>
            <UserContext.Provider value={{
                id:1,
                username: "M_M",
                email: "melkimariem150@gmail.com",
                displayName: "Melki Mariem"}}>
                <div>
                    <PostContainer/>

                </div>

            </UserContext.Provider>
        </div>
   );

}

