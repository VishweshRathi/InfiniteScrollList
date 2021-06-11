import React, { useState } from 'react'
import { LoginContainer } from './styles'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName) {
      toast.error("Username is required.", { toastId: "username_required" })
      return
    }
    if (!password) {
      toast.error("Password is required.", { toastId: "password_required" })
      return
    }
    toast.success("You are successfully logged in", { toastId: "login_success" })
    localStorage.setItem("userName", userName);
    history.push("/dashboard")
  }

  return (
    <LoginContainer>
      <div className="login">
        <div className="title_head">Hey There!!</div>
        <form onSubmit={handleSubmit}>
          <div className="username_section">
            <div className="username_label">Username:</div>
            <input className="username_input" type="text" value={userName} onChange={e => setUserName(e.target.value)} />
          </div>
          <div className="password_section">
            <div className="password_label">Password:</div>
            <input className="password_input" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <input className="submit_button" type="submit" value="Log In" data-test="submit" />
        </form>
      </div>
    </LoginContainer>
  )
}

export default Login
