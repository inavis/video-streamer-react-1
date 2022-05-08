
import styles from "./Signin.module.css"
import { useHistory } from "react-router-dom";
import {useFormik } from "formik"
import * as yup from "yup"

import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";

const validateForm =yup.object({
    email:yup.string().email("Invalid email format")
                  .required("It is mandatory field"),
    password:yup.string().max(100)
                  .required("It is mandatory field"),
  })

export function Signin(){

    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth);
    const { user } = useSelector(state => state.auth);
   // console.log(isLoggedIn,user);
   const history = useHistory();


    const {handleSubmit,values,handleChange,handleBlur,touched,errors} = useFormik({
        initialValues:{  email:"", password:""},
        // validate:validateForm,
        validationSchema:validateForm,
        onSubmit:(values) =>{
          console.log("On submit value",values);
          dispatch(login(values))
        .then(() => {
          console.log("completed")
         history.push("/")
        })
        .catch(() => {
          console.log("error")
        });
        }
    })

    return(
        <div className={styles.background}>
            <br></br><br></br><br></br>
            <div className={styles.box}>
                <div className={styles.box1Background}>
                    <div className={styles.box1}>
                        <div className={styles.box1Content}>
                            <h3>Welcome to VideoZen</h3>
                            <p>
                                Sigin and enjoy by uploading videos, streaming them and so on.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.box2}>
                   <form onSubmit={handleSubmit}>
                        <h3 className={styles.center}>SIGN IN</h3>
                        <input className={styles.input} placeholder="Email Id"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <div className={styles.error}>
                            {touched.email && errors.email ? "*"+errors.email: ""}
                        </div>
                        <input className={styles.input} placeholder="Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <div className={styles.error}>
                            {touched.password && errors.password ? "*"+errors.password: ""}
                        </div>
                        <button type="submit" className={styles.button}>LOGIN</button>
                   </form>
                </div>
            </div>
        </div>
    )
}