import "./User.css";
import { TiUser } from "react-icons/ti";
import { FaFlag, FaPhoneAlt, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { USER, baseURL } from "../API/Api";
import axios from "axios";
import { err_m, err_s } from "./Mess";
import { Bounce, Flip, ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookie from "cookie-universal";

export default function User() {
  // Cookies
  const cookie = Cookie();

  // states
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    country: "",
    date: "",
    phone_number: "",
    domain: "a",
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
      let res = await axios.post(`${baseURL}/${USER}/${UserNa}`, form);
      if (res.status === 200) {
        err_s(res.request.date.message);
      }
    } catch (err) {
      err_m(err.request.date.message);
      console.log(err);
    }
  }

  return (
    <div className="wrapper_user">
      <div className="form-box register">
        <h1>OUR PROJ</h1>
        <h3>Pleas input you information</h3>

        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label className="form-label">first name:</label>

            <input
              type="text"
              className="form-input"
              id="first"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              required
            />
            <TiUser className="icon" />
          </div>
          <div className="col-md-6">
            <label className="form-label">last name</label>
            <input
              type="text"
              className="form-input"
              id="last"
              name="last_name"
              value={form.last_name}
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
              id="phone"
              name="phone_number"
              value={form.phone_number}
              onChange={handleChange}
              required
            />
            <FaPhoneAlt className="icon2" />
          </div>

          <div className="col-md-6">
            <label className="form-label">BRD date:</label>
            <input
              type="date"
              className="form-input"
              id="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6" style={{ marginBottom: "30px" }}>
            <label className="form-label">Your domain</label>
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
              <option disabled={true} value="">
                Open this select menu
              </option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>

            <FaChevronDown className="icon3" />
          </div>

          <button className="user_button" type="submit">
            Next
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
