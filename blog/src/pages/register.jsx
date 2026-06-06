import { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;


function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    if (password.length < 6){
      alert("password must be at least 6 characters")
    }
    try {
      await axios.post(`${API_URL}/api/register/`, {
        username,
        password,
      });

      alert("Account created successfully!");
      navigate("/login"); // redirect to login
    } catch (error) {
      console.log(error.response?.data);
      alert("Registration failed");
    }
  };

return (
  <div style={{background: "#f4f6f8"}} className=" min-vh-100 d-flex justify-content-center align-items-center">
    <div className="card shadow p-4" style={{ width: "400px" }}>
      <h3 className="text-center mb-4 text-secondary">Register</h3>
      <p>register to be able to make a post</p>

      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-dark w-100"
        >
          Register
        </button>
        <Link to="/">
            <p className="text-warning">
              back
            </p>
        </Link>
      </form>
    </div>
  </div>
);
}

export default Register;