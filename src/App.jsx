import {UserProfile} from './Components/UserProfile.jsx';
import './globals.css'
import {useState} from "react";
import {LoginForm} from "./Components/LoginForm.jsx";
import {RegisterForm} from "./Components/RegisterForm.jsx";
export default function App(){
    const [counter,setCounter]=useState(3);
    const [username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const [users,setUsers]=useState([{
        id:1,
        username:"Mariem",
        email : "melkimariem150@gmail.com"},
        {
            id:2,
            username: "Zaineb",
            email: "melkizaineb150@gmail.com"
        }
    ]);


return(
    <div>
<form onSubmit={(e)=>{
    e.preventDefault();
    const newUser={
        id:counter,
        username,
        email,
    };
    setCounter((currentCounter)=>currentCounter+1);
    setUsers((currentState)=>[...currentState,newUser]);
}}>
        <label htmlFor={"username"}>Username : </label>
        <input name={"username"} id={"username"} value={username}
               onChange={(e)=>{
                   setUsername(e.target.value);
               }}

        /><br/>

        <label htmlFor={"email"}>Email : </label>
        <input name={"email"} id={"email"} value={email}
               onChange={(e)=>{
                   setEmail(e.target.value);
               }}
        /><br/>
        <button

        >Add User</button></form>
        {users.map((user) => (
            <UserProfile key={user.id} user={user} setUsers={setUsers}/>
        ))}
    </div>


)
}