import React from 'react';
import Login from './Login/Login';
import Text from './Login/Cross';
import Logo from './Login/Logo';
import Input from './common.elements/Input';
const Loginpage = ()=>{
    return (
        <React.Fragment>
            <Input/>
            <div className="d-flex justify-content-between p-3 ">
            <Logo/>
            <Text/>
            </div>
            <Login/>
        </React.Fragment>
    )
}


export default  Loginpage
