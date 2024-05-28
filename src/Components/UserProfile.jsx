import {useState} from "react";
import PropTypes from "prop-types";

export  function UserProfile({ user ,setUsers}){
    const[isEditing,setIsEditing]=useState(false);
    const [username,setUsername]=useState(user.username);
    const [email,setEmail]=useState(user.email);

    return (
                <>
                    <div key={user.id}>
                        <b>id : </b> <span>{user.id}</span> <br/>
                        <b>Username : </b>
                        {isEditing ? <input name={"username"} id={"username"}
                                            value={username}
                            onChange={(e)=>{
                                setUsername(e.target.value)
                            }}

                        /> : <span>{user.username}</span>}<br/>
                        <b>Email : </b>
                        {isEditing ? <input name={"email"} id={"email"}
                                            value={email}
                                            onChange={(e)=>{
                                                setEmail(e.target.value)
                                            }}

                        /> : <span>{email}</span>}<br/>

                        <button
                            onClick={
                                () => {
                                    setIsEditing((currentState) => !currentState)
                                }
                            } //false devient true

                        >Edit
                        </button>
                        {isEditing && (

                            <button
                                onClick={() => {
                                    setUsers(
                                        (currenUsersState) => {
                                            //updating an element in a state
                                            return currenUsersState.map(
                                                (currentUser) => {
                                                    if (currentUser.id === user.id) {
                                                        return ({...currentUser, username: username, email: email})
                                                    } else {
                                                        return currentUser;
                                                    }
                                                }
                                            )
                                        }
                                    ),
                                        setIsEditing(false);
                                }}


                            >Save</button>
                        )}

                        <button
                            onClick={()=>{
                                setUsers((currentUserState)=>currentUserState.filter(
                                    (currentUser)=>currentUser.id!==user.id
                                ))
                            }}

                        >Delete</button>

                    </div>
                </>)


}

UserProfile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,

    }).isRequired,
    setUsers: PropTypes.func.isRequired,
}
