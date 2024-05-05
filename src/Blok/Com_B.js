import { useEffect } from "react";
import "./Com_B.css";
import { MdBlock } from "react-icons/md";
import axios from "axios";
import { Com_D, baseURL } from "../API/Api";

export default function Com_B() {
// UseEffect
// useEffect(()=>{
//   axios.get(`${baseURL}/${Com_D}`)
//   .then((res)=> res.json())
//   .then((data)=> console.log(data))
// },[]);



  return (
    <div className="wrapper">
      <div className="block1 ">
        <div>
          <h3 className="h3_Block1">Company Name</h3>
          <p className="p_Block1">Full Stack company</p>
          <p className="p_Block1">Number of post: 10</p>
        </div>
        <div>
          <p>Number of Notifications: 34</p>
          <button type="button" className="button_Block">
            Block
          </button>
        </div>
      </div>
      {/* Block 2 */}
      <div className="block2 ">
        <div className="form_comb_B">
          <h5>company name:</h5>
          <p>name</p>
        </div>
        <div className="form_comb_B">
          <h5> Country:</h5>
          <p>country</p>
        </div>
        <div className="form_comb_B">
          <h5> company number</h5>
          <p>number</p>
        </div>
        <div className="form_comb_B">
          <h5>company domain</h5>
          <p>name</p>
        </div>
        <div className="form_comb_B">
          <h5>company discription</h5>
          <p>disc</p>
        </div>
      </div>
    </div>
  );
}
