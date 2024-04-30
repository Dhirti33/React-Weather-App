import "../styles/Login.css";
import { useEffect, useState } from "react";

const Login = ({onLogin}) => {
  const [userName, setUserName] = useState("");
  const [accountEmail, setAccountEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");

  const [account, setAccount] = useState([]);

  // const [page,setPage] = useState(false);

  const User = (e) => {
    setUserName(e.target.value);
  };
  const Email = (e) => {
    setAccountEmail(e.target.value);
  };
  const Password = (e) => {
    setPassword(e.target.value);
  };
  const Confirm = (e) => {
    setConfirm(e.target.value);
  };
  const loginEmail = (e) => {
    setLoginEmail(e.target.value);
  };
  const loginPassword = (e) => {
    setLoginPassword(e.target.value);
  };

  const username = document.getElementById("userName");
  const email = document.getElementById("accountEmail");
  const currentPassword = document.getElementById("accountPassword");
  const passConfirm = document.getElementById("accountReenterPassword");
  const signOut = document.querySelector(".signOut");
  const signIn = document.querySelector(".signIn");

  const onSignUp = () => {
    const signOut = document.querySelector(".signOut");
    const signIn = document.querySelector(".signIn");

    signOut.classList.add("selected");
    signIn.classList.add("remove");
    signIn.reset();
  };

  const onSignIn = () => {
    const signOut = document.querySelector(".signOut");
    const signIn = document.querySelector(".signIn");
    signIn.classList.remove("remove");
    signOut.classList.remove("selected");
    signOut.reset();
  };

  const onSignLogin = (e) => {
    e.preventDefault();
    console.log("Sign In");
    const accountAvailable = JSON.parse(localStorage.getItem("account"));
    for (let obj in accountAvailable) {
      if (
        accountAvailable[obj].email === LoginEmail &&
        accountAvailable[obj].password === LoginPassword
      ) {
        console.log(accountAvailable[obj]);
        // setPage(true)
        onLogin(true)
      } else {
        console.log("Unavailable account");
      }
    }
  };

  const onCreateAccount = (e) => {
    e.preventDefault();
    if (userName === "") {
      // add error class
      setError(username, "*This field cannot be blank !");
    }

    if (accountEmail === "") {
      // add error class
      setError(email, "*This field cannot be blank!");
    } else if (!isEmail(accountEmail)) {
      setError(email, "*Check the email!");
    }

    if (password === "") {
      // add error class
      setError(currentPassword, "*This field cannot be blank!");
    } else if (password.length <= 4) {
      setError(currentPassword, "*Password is too small!");
    }

    if (confirm === "") {
      // add error class
      setError(passConfirm, "*This field cannot be blank!");
    } else if (password !== confirm) {
      setError(passConfirm, "*Password and Confirm Password must be same.");
    }

    function setError(input, msg) {
      const formControl = input.parentNode;
      const small = formControl.querySelector("small");
      small.textContent = msg;
      // add error class
      formControl.className = "input error";
    }

    function isEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
    //Check if none of the input is empty
    if (userName !== "" && accountEmail !== "" && confirm !== "") {
      const user = { name: userName, email: accountEmail, password: confirm };
      setAccount([...account, user]);
      const signOut = document.querySelector(".signOut");
      signOut.reset();
      signIn.classList.remove("remove");
      signOut.classList.remove("selected");
    }
  };
  useEffect(() => {
    localStorage.setItem("account", JSON.stringify(account));
    console.log(account);
  }, [account]);

  return (
    <section className="Login">
      <div className="left">
        <div className="leftText">
          A Simple Weather Application
        </div>
      </div>
      <div className="right">
        <form className="signIn">
          <h1 className="text">Sign In</h1>
          <div className="bottom"></div>
          <div className="emailInput input">
            <input
              type="email"
              name="email"
              id="email "
              placeholder="Email"
              onInput={loginEmail}
            />
            <div className="emailIcon Icon">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#00000088"
                  d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
                ></path>
              </svg>
            </div>
            <small>Error Message</small>
          </div>
          <div className="passwordInput input">
            <input
              type="current password"
              name="password"
              id="password "
              placeholder="Password"
              onInput={loginPassword}
            />
            <div className="passwordIcon Icon">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#00000088"
                  d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
                ></path>
              </svg>
            </div>
            <small>Error Message</small>
          </div>
          <h3 className="or">OR</h3>
          <div className="socialIcon">
            <div className="gmail">
              <i className="devicon-google-plain" />
            </div>
            <div className="facebook">
              <i className="devicon-facebook-plain" />
            </div>
            <div className="linkedIn">
              <i className="devicon-linkedin-plain" />
            </div>
          </div>
          <button type="submit" className="signLogin" onClick={onSignLogin}>
            Login
          </button>
          <div className="bottomText">
            Create an account....{" "}
            <div className="sign" onClick={onSignUp}>
              Sign Up?
            </div>
          </div>
        </form>
        <form className="signOut">
          <h1 className="text">Create Account</h1>
          <div className="bottom"></div>
          <div className="userNameInput input">
            <input
              type="text"
              name="text"
              id="userName"
              placeholder="User name(Case sensitive)"
              onInput={User}
            />
            <div className="userIcon Icon">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#00000088"
                  d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1Z"
                ></path>
              </svg>
            </div>
            <small>Error Message</small>
          </div>
          <div className="emailInput input">
            <input
              type="email"
              name="email"
              id="accountEmail"
              placeholder="Email"
              onInput={Email}
            />
            <div className="emailIcon Icon">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#00000088"
                  d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
                ></path>
              </svg>
            </div>
            <small>Error Message</small>
          </div>
          <div className="passwordInput input">
            <input
              type="text"
              name="text"
              id="accountPassword"
              placeholder="Password(Case sensitive)"
              onInput={Password}
            />
            <div className="passwordIcon Icon">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#00000088"
                  d="M21 2a8.998 8.998 0 0 0-8.612 11.612L2 24v6h6l10.388-10.388A9 9 0 1 0 21 2Zm0 16a7.013 7.013 0 0 1-2.032-.302l-1.147-.348l-.847.847l-3.181 3.181L12.414 20L11 21.414l1.379 1.379l-1.586 1.586L9.414 23L8 24.414l1.379 1.379L7.172 28H4v-3.172l9.802-9.802l.848-.847l-.348-1.147A7 7 0 1 1 21 18Z"
                ></path>
                <circle cx="22" cy="10" r="2" fill="#00000088"></circle>
              </svg>
            </div>
            <small>Error Message</small>
          </div>
          <div className="rePasswordInput input">
            <input
              type="text"
              name="text"
              id="accountReenterPassword"
              placeholder="Re-enter password"
              onInput={Confirm}
            />
            <div className="rePasswordIcon Icon">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#00000088"
                  d="M21 2a8.998 8.998 0 0 0-8.612 11.612L2 24v6h6l10.388-10.388A9 9 0 1 0 21 2Zm0 16a7.013 7.013 0 0 1-2.032-.302l-1.147-.348l-.847.847l-3.181 3.181L12.414 20L11 21.414l1.379 1.379l-1.586 1.586L9.414 23L8 24.414l1.379 1.379L7.172 28H4v-3.172l9.802-9.802l.848-.847l-.348-1.147A7 7 0 1 1 21 18Z"
                ></path>
                <circle cx="22" cy="10" r="2" fill="#00000088"></circle>
              </svg>
            </div>
            <small>Error Message</small>
          </div>
          <h3 className="or">OR</h3>
          <div className="socialIcon">
            <div className="gmail">
              <i className="devicon-google-plain" />
            </div>
            <div className="facebook">
              <i className="devicon-facebook-plain" />
            </div>
            <div className="linkedIn">
              <i className="devicon-linkedin-plain" />
            </div>
          </div>
          <button
            type="submit"
            className="createAccount"
            onClick={onCreateAccount}
          >
            Create Account
          </button>
          <div className="bottomText">
            Already have an account....{" "}
            <div className="sign" onClick={onSignIn}>
              Sign In?
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
