import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Loginpage from './Loginpage'
import SignInSide from './signup'
export default function Pages() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/register" component={SignInSide}/>
                    <Route exact path="/" component={Loginpage}></Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}
