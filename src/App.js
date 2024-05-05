import "./App.css";
import Home from "./Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register1 from "./register/Register1";
import Login from "./register/Login";
import Register2 from "./register/Register2";
import User from "./register/User";
import Comp from "./register/Comp";
import Creat_post from "./Creat_post/Creat_post";
import Com_B from "./Blok/Com_B";
import Alert from "./Blok/Alert"


export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register1/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register2" element={<Register2/>}></Route>
          <Route path="/user" element={<User/>}></Route>
          <Route path="/creat" element={<Creat_post/>}></Route>
          <Route path="/comp" element={<Comp/>}></Route>
          <Route path="/block" element={<Com_B/>}></Route>
          <Route path="/alert" element={<Alert/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
