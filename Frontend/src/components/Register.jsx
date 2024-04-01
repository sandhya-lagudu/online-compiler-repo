import Axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export function Register(){
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [userName,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState(0);
    const [password,setPassword]=useState("");
    const url=`${import.meta.env.BACKEND_URL}/register`;
    const navigate=useNavigate();
    const sendCode=async (event)=>{
      event.preventDefault();
        const payload={
          firstName,
        lastName,
        userName,
        email,
        phone,
        password
        };
        try{
          const {data} = await Axios.post(`${url}`,payload);
          console.log(data);
          // if(data.message!=undefined){
            navigate("/login");
          // }
          // console.log(data);
        }
        catch(error){
          console.log(error.response);
        }
      };
    return (
        <>
        <div className="flex items-center justify-center bg-violet-200">
        <form className="h-screen flex flex-col justify-center w-4/12" onSubmit={sendCode}>
          <h1 className="text-2xl font-mono">Create your account</h1>
          <br />
          <input
          className="rounded-md text-xl"
            type="text"
            name="fname"
            id="fname"
            placeholder="First Name"
            onChange={e=>{setFirstName(e.target.value)}}
            // value={user.firstName}
          />
          <br />
          
          <input
          className="rounded-md text-xl"
            type="text"
            name="lname"
            id="lname"
            placeholder="Last Name"
            onChange={e=>{setLastName(e.target.value)}}
            // value={user.lname}
          />
          <br />
          <input
          className="rounded-md text-xl"
            type="text"
            name="uname"
            id="uname"
            placeholder="UserName"
            onChange={e=>{setUserName(e.target.value)}}
            // value={user.lname}
          />
          <br />
          
          <input
          className="rounded-md text-xl"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={e=>{setEmail(e.target.value)}}
            // value={user.email}
          />
          <br />
          
          <input
          className="rounded-md text-xl"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Phone"
            onChange={e=>{setPhone(e.target.value)}}
            // value={user.email}
          />
          <br />
          
          <input
          className="rounded-md text-xl"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={e=>{setPassword(e.target.value)}}
            // value={user.password}
          />
          <br />
          
          <button class="bg-violet-500 py-1 px-1 rounded-xl text-xl shadow-2xl shadow-violet-950" type="submit">
            Register
          </button>
        </form>
      </div>
        </>
    );
}