import React, { useEffect, useState } from "react";
import "../stylesheets/pages/Login.scss";
import Button from "../components/Button/Button";
import { BsGoogle } from "react-icons/bs";
import {
  createAccount,
  loginWithEamil,
  loginWithSocial,
} from "../api/firebase";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function Login() {
  const [account, setAccount] = useState({ email: "", password: "" });
  const [login, setLogin] = useState(true);
  const { user } = useUserContext();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount((account) => ({ ...account, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login ? loginWithEamil(account) : createAccount(account);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="login_area">
      <div className="login_box">
        <h2>{login ? "LOGIN" : "Create Account with Email & password"}</h2>
        <form className="form_login" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={account.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={account.password}
            onChange={handleChange}
          />
          <Button type="submit">{login ? "LOGIN" : "CREATE ACCOUNT"}</Button>
        </form>
        <button
          className="btn_sign_in"
          onClick={() => setLogin((prev) => !prev)}
        >
          {!login ? " Sign In" : "Create Account"}
        </button>
        <Button type="white" onClick={loginWithSocial}>
          Continue with Google <BsGoogle />
        </Button>
      </div>
    </div>
  );
}
