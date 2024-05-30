import {useContext} from "react";
import {UserContext} from "../utils/contexts/UserContext.jsx";

function PostContentButtons(){
    const userContextData=useContext(UserContext);
    return <div>
        {userContextData.id}
    </div>
}
export default PostContentButtons;