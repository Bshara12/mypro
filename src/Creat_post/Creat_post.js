import "./Creat_post.css";
import { FaClock, FaFlag } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { MdChecklist } from "react-icons/md";
import { GiStrong } from "react-icons/gi";
import { AiFillDollarCircle } from "react-icons/ai";
import axios from "axios";
import { useState } from "react";
import { err_m, err_s } from "../register/Mess";
import { CREATE, baseURL } from "../API/Api";
import Cookie from "cookie-universal";

export default function Creat_post() {
  // Cookies
  const cookie = Cookie();
  const token = cookie.get("token");

  // states
  const [form, setForm] = useState({
    salary: "98765",
    jop_description: "back-end developer",
    work_type: "remotly",
    work_time: "part_time",
    requirements: "have expirence in php",
    experience_years: "2",
    domain: "a",
    location: "syria",
  });
  // err msg

  // Handel Form Change
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Handle Submite
  async function handleSubmit(e) {
    e.preventDefault();
    try {
  let res =  await axios.post(`${baseURL}/${CREATE}`, form, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      if (res.status === 200) {
        err_s(res.request.date.message);
      }
    } catch (err) {
      err_m(err.request.date.message);
      console.log(err);
    }
  }

  return (
    <div className="wrapper_creat">
      <div className="form-box register">
        <form className="row g-3" onSubmit={handleSubmit}>
          <h1>OUR PROJ</h1>
          <h3>Pleas Enter informayion about your post</h3>

          {/* work type */}
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              work type
            </label>
            <select
              className="form-select2"
              id="work_type"
              name="work_type"
              value={form.work_type}
              onChange={handleChange}
              required
              defaultValue=""
            >
              <option disabled={true} value="">
                Choose...
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            <FaAngleDown className="icon3" />
          </div>

          {/* work type */}

          {/* work time */}
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              work time
            </label>
            <select
              className="form-select2"
              id="work_time"
              name="work_time"
              value={form.work_time}
              onChange={handleChange}
              required
              defaultValue=""
            >
              <option disabled={true} value="">
                Choose...
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <FaClock className="icon3" />
          </div>

          {/* work time */}

          {/* domain */}
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              domain
            </label>
            <select
              id="domain_post"
              className="form-select2"
              name="domain"
              value={form.domain}
              onChange={handleChange}
              required
              defaultValue=""
            >
              <option disabled={true} value="">
                Choose...
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <FaAngleDown className="icon3" />
          </div>

          {/* domain */}

          {/* location */}

          <div className="col-md-6">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-input"
              id="location_post"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              placeholder="location"
            />
            <FaFlag className="icon2" />
          </div>

          {/* location */}

          {/* requirment */}
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              requirment
            </label>
            <input
              type="text"
              className="form-input"
              id="requirement"
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              required
              placeholder="requirment..."
            />
            <MdChecklist className="icon" />
          </div>

          {/* requirment */}

          {/* experiance */}
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              experiance
            </label>
            <input
              type="text"
              className="form-input"
              id="experiance"
              name="experience_years"
              value={form.experience_years}
              onChange={handleChange}
              required
              placeholder="experiance..."
            />
            <GiStrong className="icon" />
          </div>
          {/* experiance */}

          {/* salory */}
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              salory
            </label>
            <input
              type="text"
              className="form-input"
              id="salory"
              name="salary"
              value={form.salary}
              onChange={handleChange}
              required
              placeholder="salory..."
            />
            <AiFillDollarCircle className="icon" />
          </div>
          {/* salory */}

          {/* description */}
          <div className="col-12">
            <label htmlFor="inputCity" className="form-label">
              discription
            </label>
            <textarea
              className="form-control-des"
              placeholder="Leave a comment here"
              id="jop_description"
              name="jop_description"
              value={form.jop_description}
              onChange={handleChange}
              required
              style={{ height: 100 }}
            />
          </div>

          {/* description */}

          <button className="button-creatr" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
