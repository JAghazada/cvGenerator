import React, {  useState } from 'react'
import { useHistory } from 'react-router'
import {Link} from '@material-ui/core';

import '../css/style.css'

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
        <section className="section-login" style={{marginTop:"7%"}}>
        <h2 className="font-weight-bold h2-login">Xoş gəlmisiniz !</h2>
        <div  className="d-flex justify-content-center  align-items-center" style={{height:'50vh'}}>
            <form className="login-form d-flex align-items-center ">
                <section className="section-login">
                <div className="col-12 d-flex p-2 mb-2 justify-content-center">
                    <div  className="input-field col-11">
                        <input className="input-login" value={value} type="text" id="name" onChange={(e)=>{
                            setValue(e.target.value)
                        }} required />
                        <label className="label-login" style={{fontSize:"16px"}}  htmlFor="name">Email*</label>
                    </div>
                </div>
                <div className="col-12 d-flex p-2 mb-2 justify-content-center">
                    <div className="input-field col-11">
                        <input className="input-login" type="password" id="pass" value={pass} required onChange={(e)=>{
                            setPass(e.target.value)
                        }}  />
                        <label className="label-login" style={{fontSize:"16px"}}  htmlFor="pass">Şifrə*</label>
                    </div>
                </div>
                    <div className="col-12 mb-3 d-flex justify-content-center">
                        <button type="button" onClick={()=>{
                            sendData(value,pass)
                        }} className="btn btn-login col-10 text-center font-weight-bold" >Daxil ol</button>
                        
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                    <Link href="/register" className="text-center" variant="body2">
                        {"Hesabınız yoxdur?"}
                    </Link>
                    </div>
                    
                </section>
            </form>
        </div>
        </section>
        </div>
    )
}
