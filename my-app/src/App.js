import "./App.css";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AdminDashboard from "./Components/Admin/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [userstate, setUserState] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login setUserState={setUserState} />}></Route>
          <Route path="/login" element={<Login setUserState={setUserState} />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/profile" element={<Profile 
                                              id={userstate.id}
                                              userName={userstate.userName}
                                              password={userstate.password}
                                              fname={userstate.fname}
                                              lname={userstate.lname}
                                              address={userstate.address}
                                              date={userstate.date}
                                              mobileNumber={userstate.mobileNumber}
                                              pincode={userstate.pincode}
                                              currentTime={new Date()}
                                              />}></Route>
                                              <Route path="/admin" element={<AdminDashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
