import { useRef, useContext } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context";
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(authCtx.token);
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDyZ-p5wvCSv1Xyp-GrBCjLfjQkyhEtWjg";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        idToken: authCtx.token,
        password: newPasswordInputRef.current.value,
        returnSecureToken: false,
      }),
      headers: {
        "Content-Type": "applcation/json",
      },
    }).then((res) => {
      // assumption: always succeeds!
      res.json().then(data => {
        console.log(data)
        history.replace('/')
      })
    })
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={newPasswordInputRef} minLength="7" type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
