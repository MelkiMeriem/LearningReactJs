import {useEffect, useState} from "react";

function useFetchUser(userId){
    const [userData,setUserData]=useState({});
    const [loading,setLoading]=useState(false);
    const[error,setError]=useState();


    const userApiUrl = "https://jsonplaceholder.typicode.com/users";
    useEffect(() => {
       const controller=new AbortController();
       setLoading(true);
        fetch(`${userApiUrl}/${userId}`,{signal:controller.signal}).then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                setUserData(data);
            })
            .catch((err)=>{
                console.log(err);
                setError(err);
        }).finally(  setLoading(false));
        return (()=>{
            controller.abort();
        })

    },[userId]); // if the userid has changed , the callback function will run again
    return{user : userData,loading,error};
}
export default useFetchUser;