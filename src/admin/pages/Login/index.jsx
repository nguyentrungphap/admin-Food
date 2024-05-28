import React, { useState } from "react";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import { selectUserAccounts } from "../../redux/user/selector";
import { useNavigate } from "react-router-dom";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const usersAccount = useSelector(selectUserAccounts);
  console.log(usersAccount);
  console.log(userName);
  console.log(password);
  const HandlerSubmit = () => {
    if (
      usersAccount.some(
        (item) =>
          item.CustomerName === userName &&
          item.Customerpassword === password &&
          (item.access == 1 || item.access == 2)
      )
    ) {
      navigate("Dashboards");
    }
    return;
  };
  return (
    <div className={style.wrapper}>
      <form onClick={HandlerSubmit}>
        <h2>Login</h2>
        <div>
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
