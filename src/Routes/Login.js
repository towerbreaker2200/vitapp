import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../firebase";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "id") {
      setId(value);
    } else if (name === "pw") {
      setPw(value);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await createUserWithEmailAndPassword(authService, id, pw);
      } else {
        data = await signInWithEmailAndPassword(authService, id, pw);
      }

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="id"
          type="email"
          placeholder="Email"
          required
          value={id}
          onChange={onChange}
        />
        <input
          name="pw"
          type="password"
          placeholder="Password"
          required
          value={pw}
          onChange={onChange}
        />
        <input
          type="submit"
          value={newAccount ? "Create Account" : "Sign In"}
        />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Sign In" : "Create Account"}
      </span>
      <div>
        <button>Continue with kakaoTalk</button>
      </div>
    </div>
  );
}

export default Login;
