import PostContent from  "./PostContent.jsx"
import {useContext} from "react";
import {UserContext} from "../utils/contexts/UserContext.jsx";
function PostContainer(){
  const userContextData=  useContext(UserContext); // consumming the context
    return(
        <div>
            <PostContent />
            <div>
                {userContextData.name}
            </div>
        </div>

    )
}
export default  PostContainer;