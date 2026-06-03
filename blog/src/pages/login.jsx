import { useState } from "react";
import axios from "axios";
import { setAuthUser } from "../auth";
import { useNavigate } from "react-router-dom";
import "./Login.css"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        {
          username,
          password,
        }
      );

      setAuthUser(response.data);

      console.log("Login successful:", response.data);
      alert("Login successful!");
      setAuthUser(response.data);
        setUsername("");
        setPassword("");
        navigate("/");
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Login failed");
    }
  };

  return (
    <div  className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <span style={{color:'green',fontWeight:'bold'}}>Login</span>
        <h4>Welcome Back</h4>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;