"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";
import ProfilePage from "./components/UserProfile/page";
import Navbar from "./components/Navbar/page";
import Main from "./components/Main/page"
interface User{
  name:string,
  email:string,
  profileimg:string,
  _id:string
}
export default function Home():any {
  const [theme,settheme]=React.useState("dark")
  
  const [user, setuser] = useState<User>({ name: '',email:'',profileimg:'',_id:''});

  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("api/users/HomePage");
      setuser(res.data.user);
    };
    fetchdata();
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <main className="flex mt-20 h-[89vh] w-[87%] m-auto gap-2 ">
          <div className={`border-none shadow-lg left-side flex-auto h-[60%] w-1/6`}>
          {user && <ProfilePage name={user.name} email={user.email} profileimg={user.profileimg} />}

          </div>
          <div className={`${"shadow-lg"}  middle h-[99%] flex-auto w-3/6 `}>
                <Main profileimg={user.profileimg} id={user._id}/>
          </div>
          <div className="right-side hidden lg:block shadow-lg  w-1/6 flex-auto h-[60%]">
             Right 
          </div>
        </main>
      </div>
    </div>
  );
}
