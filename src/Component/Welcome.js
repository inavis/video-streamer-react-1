import { Fragment } from "react";
import { useSelector } from "react-redux";

export function Welcome(){

    const { isLoggedIn } = useSelector(state => state.auth);
    const { user } = useSelector(state => state.auth);
    console.log(user,isLoggedIn)
    return(
        <Fragment>
         {
            isLoggedIn?
           <div>
               {
                   `Welcome ${user.name} `
               }
           </div>
            : 
         <div>
            Kindly Login to access all contents
        </div>
         }
        </Fragment>
    )
}