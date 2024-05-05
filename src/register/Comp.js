import "./User.css";
import { TiUser } from "react-icons/ti";
import { FaFlag, FaPhoneAlt, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { COMP, baseURL } from "../API/Api";
import axios from "axios";
import { Bounce, Flip, ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { err_m, err_s } from "./Mess";
import { GiWallet } from "react-icons/gi";
import Cookie from "cookie-universal";


export default function Comp() {
  // Cookies
  const cookie = Cookie();

  // states
  const [form, setForm] = useState({
    company_Name: "",
    country: "",
    phone_number: "",
    domain: "a",
    description: "",
    account_number: "",
  });

  const UserNa = cookie.get("username");

  // Handel Form Change
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Handle Submite
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let res = await axios.post(`${baseURL}/${COMP}/${UserNa}`, form);
      console.log(res)
      if (res.status === 200) {
        err_s(res.date.message);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="wrapper_comp">
      <div className="form-box register">
          <h1>OUR PROJ</h1>
          <h3>Pleas input you company information</h3>

          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label className="form-label">Company name:</label>

              <input
                type="text"
                className="form-input"
                id="company_Name"
                name="company_Name"
                value={form.company_Name}
                onChange={handleChange}
                required
              />
              <TiUser className="icon" />
            </div>

            <div className="col-md-6">
              <label className="form-label">Country</label>
              <input
                type="text"
                className="form-input"
                id="country"
                name="country"
                value={form.country}
                onChange={handleChange}
                required
              />
              <FaFlag className="icon2" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input
                type="number"
                inputMode="numeric"
                className="form-input"
                id="phone_number"
                name="phone_number"
                value={form.phone_number}
                onChange={handleChange}
                required
              />
              <FaPhoneAlt className="icon2" />
            </div>

            <div className="col-md-6">
              <label className="form-label">Your company domain</label>
              <select
                className="form-select2"
                aria-label="Default select example"
                id="domain"
              name="domain"
              value={form.domain}
               onChange={handleChange}
               defaultValue=""
               required
              >
                <option  disabled={true} value="">Open this select menu</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>

              <FaChevronDown className="icon3" />
            </div>

            <div className="col-md-6" style={{marginLeft:"100px",textAlign:"center"}}>
              <label className="form-label">account number</label>
              <input
                type="number"
                inputMode="numeric"
                className="form-input"
                id="account_number"
                name="account_number"
                value={form.account_number}
                onChange={handleChange}
                required
              />
              <GiWallet className="icon2" />
            </div>

            <div className="col-12" style={{marginTop:"10px"}}>
              <label className="form-label">Describtion</label>
              <textarea
                className="form-control-des"
                type="text"
                placeholder="please enter more info about your combany...."
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit">Next</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
