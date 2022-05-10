import { Fragment } from "react";

import styles from './Container.module.css'

import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import {useSelector,useDispatch } from "react-redux";
import { logout } from "../actions/auth";


export function Container(props){
    const history = useHistory();
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(state => state.auth);

    const logoutHandler = () =>{
        console.log("logouts")
        dispatch(logout())
            .then((res)=>{
                history.push("/signin")
            })
            .catch((err)=>{console.log(err)})
    }
    
    return(
        <Fragment>
            <div className={styles.appbar}>
                {/* <button className={styles.iconButton}>
                     <i class="icon-camera-retro icon-3x"></i>
                </button> */}
                {/* <FontAwesomeIcon icon={faVideo} size="2x" pulse/> */}
                <button onClick={()=>history.push("/")} className={styles.button1}>
                    VIDEOZEN
                </button>
                <FontAwesomeIcon icon={faUpload}/>
                {
                    !isLoggedIn?
                    <button onClick={()=>history.push("/signin")} className={styles.button2}>
                    SignIn
                    </button>
                    :
                    <button onClick={logoutHandler} className={styles.button2}>
                        Logout
                    </button>
                }

                {
                    !isLoggedIn?         
                    <button onClick={()=>history.push("/signup")} className={styles.button2}>
                    SignUp
                     </button>:""
                }
            </div>
            <div>
                {
                    props.children
                }
            </div>
        </Fragment>
    )
}