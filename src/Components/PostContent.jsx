import PostContentButtons from "./PostContentButtons.jsx"
import {useContext, useRef} from "react";
import {UserContext} from "../utils/contexts/UserContext.jsx";
function PostContent(){
    const userContextData=useContext(UserContext);
;    return(
        <>
            <PostContentButtons/>
            {userContextData.email}
        </>
    )
}
export default  PostContent;