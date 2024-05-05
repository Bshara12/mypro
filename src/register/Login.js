import { useState } from "react";
import "./Register.css";
import "./User.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LOGIN, baseURL } from "../API/Api";
import axios from "axios";
import { Bounce, Flip, ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { err_m, err_s } from "./Mess";
import Cookie from "cookie-universal";


export default function Login() {
  // Cookies
  const cookie = Cookie();

  // states
  const [form, setForm] = useState({
    login_type: "",
    password: "",
  });

  const [err, seterr] = useState(false);

  // Handel Form Change
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Handle Submite
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let res = await axios.post(`${baseURL}/${LOGIN}`, form);
      cookie.set("email", form.login_type);
      cookie.set("password", form.password);
      const token = res.data.token;

      cookie.set("token", token);
      if (res.status === 200) {
        console.log(res)
        err_s(res.data.message);
      }
    } catch (err) {
      console.log(err);
      err_m(err.date.message);
    }
  }

  return (
    <div className="wrapperLogin">
      <div className="form-box login">
        <form onSubmit={handleSubmit} action="">
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Email"
              name="login_type"
              value={form.login_type}
              onChange={handleChange}
              required
            />
            <MdEmail className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <FaLock className="icon" />
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              creat account..
              <a href="./register">Register</a>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
