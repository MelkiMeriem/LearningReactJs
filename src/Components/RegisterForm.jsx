import { useState} from "react";

export function RegisterForm(){
     //usestate()is an array of 2 elements

    const [FormFields,setFormFields]=useState(
        {
            Username:"",
            Password:"",
            DisplayName:"",

        }
    )

    return(
    <>
        <form>
            <label htmlFor={"username"}>Username</label>
            <input id={"username"} name={"username"} value={FormFields.Username}
                   onChange={(e)=>{
                       setFormFields((currentState)=>({...currentState,
                           Username:e.target.value,

                       }))
                   }}
            /><br/>

            <label htmlFor={"password"}>Username</label>
            <input id={"password"} name={"password"} type={"password"} value={FormFields.Password}
                   onChange={(e)=>{
                       setFormFields((currentState)=>({...currentState,
                           Password:e.target.value,

                       }))
                   }}


            /><br/>

            <label htmlFor={"displayName"} >Display Name</label>
            <input id={"displayName"} value={FormFields.DisplayName}
                   onChange={(e)=>{
                       setFormFields((currentState)=>({...currentState,
                           DisplayName:e.target.value

                       }))
                   }}

            />
           <button >Register</button>
        </form>
    </>)
}