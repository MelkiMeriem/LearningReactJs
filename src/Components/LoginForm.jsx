export function LoginForm(){
    return(
        <form method={"POST"} onSubmit={(e)=>{
            e.preventDefault(); //prevent the page from reloading
            const formData=new FormData(e.target);
            console.log(formData.get("username"));
        }}>
            <label htmlFor={"username"}>Username</label>
            <input id='username'
                   onChange={(e)=>{
                   }}
            name={"username"}
            />
            <br/>
            <label htmlFor={"password"}>Password</label>
            <input id='password' type={"password"}


            />
            <br/>
            <button>Login</button>

        </form>

    )
}