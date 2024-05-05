import { GrUserWorker } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { REGISTER1, baseURL } from "../API/Api";
import axios from "axios";
import { err_m, err_s } from "./Mess";
import Cookie from "cookie-universal";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

export default function Register2() {
  // Cookies
  const cookie = Cookie();

  // states
  const [form1, setForm1] = useState({
    username: cookie.get("username"),
    email: cookie.get("email"),
    password: cookie.get("password"),
    user_type: 2,
  });

  const [form2, setForm2] = useState({
    username: cookie.get("username"),
    email: cookie.get("email"),
    password: cookie.get("password"),
    user_type: 1,
  });

  // Handle Submite
  async function handleSubmit_E(e) {
    //  settype(2);
    e.preventDefault();
    try {
      let res = await axios.post(`${baseURL}/${REGISTER1}`, form1);
      // token
      const token = res.data.token;
      cookie.set("token", token);
      console.log(res);
      if (res.status === 200) {
        err_s(res.data.message);
      }

      window.location.pathname = "/user";
    } catch (err) {
      console.log(err);
      err_m(err.response.data.message);
    }
  }

  // Handle Submite
  async function handleSubmit_C(e) {
    e.preventDefault();
    try {
      let res = await axios.post(`${baseURL}/${REGISTER1}`, form2);
      // token
      const token = res.data.token;
      cookie.set("token", token);
      console.log(res);
      if (res.status === 200) {
        err_s(res.data.message);
      }
      window.location.pathname = "/comp";
    } catch (err) {
      console.log(err);

      err_m(err.response.data.message);
    }
  }

  return (
    <div>
      <div className="wrapperRegister2">
        <div className="form-box register">
          <form action="">
            <h1>OUR PROJ</h1>
            <h3>Select account type</h3>
            <p>Sorry!this can't be Changed later</p>
            <button
              type="submit"
              className="user_Admin"
              onClick={handleSubmit_E}
            >
              <GrUserWorker className="B_icon" />
              I Want to Work
              <FaArrowRightLong className="B_icon" />
            </button>
            <button
              type="submit"
              className="user_Admin"
              onClick={handleSubmit_C}
            >
              <FaBuilding className="B_icon" />
              Search Employe
              <FaArrowRightLong className="B_icon" />
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
