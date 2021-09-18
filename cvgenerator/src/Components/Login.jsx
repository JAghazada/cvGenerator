import React, {  useState } from 'react'
import { useHistory } from 'react-router'
import {Link} from '@material-ui/core';

import './css/style.css'
import axios from 'axios'
require('dotenv').config()
export default function Login() {
    const [value ,setValue] = useState('')
    const [pass ,setPass] = useState('')
    const [error,setError] = useState([])
    const history = useHistory()
    const sendData=(email,pass)=>{
        if(email !== '' && email !==undefined && email !== null &&pass !== '' && pass !==undefined && pass !== null )
        {
            axios.post("http://localhost:5000/login",{
                email:email,
                password :pass
            })
            .then(response=>{
                console.log(response);
                const token = response.data;
                axios.post("http://localhost:5000/posts",{
                },{
                    headers:{
                        authorization : "Bearer "+token
                    } 
                })
                .then(result =>{
                    console.log(result.data);
                    const status = result.data.status
                    const message = result.data.message
                    if(status === 1){
                        console.log(message);
                        history.push('/register')
                    }else {
                        console.log(status);
                        setError([...error,{msg:result.message}])
                    }
                })
                .catch(error=>{
                    console.error(error);
                })
            })
            .catch(err=>{
                console.error(err);
            })
        }else{
            return {message : "Something went wrong!"}
        }
    }
    
    return (
        <div>
        <section  style={{marginTop:"7%"}}>
        <h2>Hello Welcome Back!</h2>
        <div  className="d-flex justify-content-center align-items-center" style={{height:'50vh'}}>
            <form className="login-form d-flex align-items-center">
                <section>
                <div className="col-12 d-flex p-2 justify-content-center">
                    <div  className="input-field col-11">
                        <input value={value} type="text" id="name" onChange={(e)=>{
                            setValue(e.target.value)
                        }} required />
                        <label  htmlFor="name">Your name:</label>
                    </div>
                </div>
                <div className="col-12 d-flex p-2 justify-content-center">
                    <div className="input-field col-11">
                        <input type="password" id="pass" value={pass} required onChange={(e)=>{
                            setPass(e.target.value)
                        }}  />
                        <label  htmlFor="pass">Password:</label>
                    </div>
                </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button type="button" onClick={()=>{
                            sendData(value,pass)
                        }} className="btn col-10 text-center" >Login</button>
                        
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                    <Link href="/register" className="text-center" variant="body2">
                        {"You don't have an account?"}
                    </Link>
                    </div>
                    
                </section>
            </form>
        </div>
        </section>
        </div>
    )
}
