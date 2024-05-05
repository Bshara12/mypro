import { createContext, useContext, useState } from "react";
import "./Register.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { REGISTER1, baseURL } from "../API/Api";
import { err_m, err_s } from "./Mess";
import { Bounce, Flip, ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookie from "cookie-universal";


export default function Register1() {
  // states
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handel Form Change
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Cookies
  const cookie = Cookie();

  // Handle Submite
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // let res = await axios.post(`${baseURL}/${REGISTER1}`, form);
      // if (res.status === 200) {
      //   err_s();
      // }
      cookie.set('username' ,form.username);
      cookie.set('email' ,form.email);
      cookie.set('password' ,form.password);
      window.location.pathname="/register2";
    } catch (err) {
      console.log(err);

      err_m();
    }
  }

  return (
    <div className="wrapperRegister">
      <div className="form-box register">
        <form onSubmit={handleSubmit} action="">
          <h1>Register</h1>

          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="UserName"
              value={form.username}
              onChange={handleChange}
              required
            />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <MdEmail className="icon" />
          </div>

          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Repet Password" required />
            <FaLock className="icon" />
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" />I agree to the terms & condition
            </label>
          </div>
          {/* onClick={seterr && err_m} */}
          <button type="submit">Register</button>
          <div className="register-link">
            <p>
              Have an Account
              <a href="./login">Login</a>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
