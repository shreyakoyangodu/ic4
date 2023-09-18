import React, {useState} from 'react';
import "./Login.css";
const Login=()=>{
    const[data,setData]=useState({email:"",password:""});
    //changehandler---
    const changeHandler=(e)=>{
        let name1=e.target.name;
        let val=e.target.value;
        setData({...data,[name1]:val});
    };
    //submit handler---

    const submitHandler=(e)=>{
        alert("you are logged in successflly");
    };
    return(
        <div className="d-flex justify-content-center align-items-center vh-100" id="b-img">
            <div className="p-5 rounded bg-white border border-3 border-danger">
        <form onSubmit={submitHandler}>
        <h2 className="text-center">Login</h2>
        <div className='mb-3'>
            <label htmlFor="email">Email</label>
            <input 
            type="email"
            placeholder="Enter your email"
            className="form-control"
            name="Email"/>
        </div>
        <div className='mb-3'>
            <label htmlFor="password">Password</label>
            <input 
            type="password"
            placeholder="Enter your password"
            className="form-control"
            name="password"/>
        </div>
        <div className='mb-3'>
            <input 
            type="checkbox" className="custom-control custom-checkbox"/>
            <label htmlFor="checkbox" className="custom-input-label ms-2">
                Remember me
                </label>
        
        </div>
        <div className="d-grid">
            <button className="btn btn-danger" type="submit">Login</button>
        </div>
        </form>
        </div>
        </div>
    );
};
 export default Login;