import Styles from '../Styles.module.css'
export function UserUserName(props){
    return(
            <p className={Styles.username} >Username :<span>{props.username}</span> </p>
    )
}