import "./App.css";
import Navbar from "./component/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home"
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import {filterData,apiUrl} from "./data"
import toast from "react-hot-toast";
import Blogs from "./component/Blogs";

function App() {
  const [IsLoggedIn,setIsLoggedIn]=useState(false);
  const [loading,setLoading]=useState(true);

  const [courses,setCourses]=useState(null);


  async function fetchData(){
    setLoading(true);
    try{
      let response= await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
      console.log(output.data);
    }
    catch(error){
      toast.error("Network me koi dikkat hai");
    }
   setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]) 
      
  return <div className="w-screen h-screen bg-richblack-100 flex flex-col  ">
    <Navbar isLogIn={IsLoggedIn} setisLogIn={setIsLoggedIn} />
    


    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/dashboard" element={
      <Dashboard
       courses={courses}
       loading={loading}
       filterData={filterData}
      />}></Route>
      <Route path="/blog" element={<Blogs/>}></Route>
    </Routes>
  </div>;
}

export default App;
