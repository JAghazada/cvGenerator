import React from 'react'
import './style.css'
export default function Login() {
    return (
        <div>
        <section  style={{marginTop:"7%"}}>
        <h2>Hello Welcome Back!</h2>
        <div  className="d-flex justify-content-center align-items-center" style={{height:'50vh'}}>
            <form className="login-form d-flex align-items-center">
                <section>
                <div className="col-12 d-flex p-2 justify-content-center">
                    <div class="input-field col-11">
                        <input type="text" id="name" required />
                        <label  for="name">Your name:</label>
                    </div>
                </div>
                <div className="col-12 d-flex p-2 justify-content-center">
                    <div class="input-field col-11">
                        <input type="password" id="pass" required />
                        <label  for="pass">Password:</label>
                    </div>
                </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button className="btn col-10 text-center">Login</button>
                    </div>
                </section>
            </form>
        </div>
        </section>
        </div>
    )
}
