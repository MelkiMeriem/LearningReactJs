import {useContext} from "react";
import {UserContext} from "../utils/contexts/UserContext.jsx";

function PostContentButtons(){
    const {id,setUserData}=useContext(UserContext);
    return <div>
        {id} <br/>
        <button
            onClick={()=>{setUserData(
                ((currentState)=>({...currentState,displayName:"Zaineb Melki"}))
            )}}
        >Click me</button>
    </div>
}
export default PostContentButtons;