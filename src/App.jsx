import {UserProfile} from './Components/UserProfile.jsx';
import './globals.css'
import {useEffect, useState} from "react";
import {LoginForm} from "./Components/LoginForm.jsx";
import {RegisterForm} from "./Components/RegisterForm.jsx";
export default function App(){
    const [counter,setCounter]=useState(0);
    useEffect(() => {
        console.log("rendering...")
        document.title="React Tutorial"
    }, [counter]); //cette callback function will be invoked if the state of counter
    //changed , [] is the array of dependencies in which the function setEffect will be invoked , you can let it empty .
    //fetch will return a promise object , so it has the functions then(success) , catch , finally
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method:'GET',
            }
        ).then((response)=>{return response.json()}).then((data)=>{console.log(data)})
    }, []);
return(
    <div>
        <div>
            You clicked the button {counter} times
        </div>
       <button
       onClick={()=>setCounter((currentCounterState)=>currentCounterState+1)}
       >Click Me</button>
    </div>

)
}