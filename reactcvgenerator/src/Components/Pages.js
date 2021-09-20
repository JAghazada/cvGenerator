import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Aboutus from './AboutUs/Aboutus'
import Blog from './Blog/Blog'
import China from './Blog/Country-resumes/China'
import Germany from './Blog/Country-resumes/Germany'
import Russia from './Blog/Country-resumes/Russia'
import cvpage from './cvpage.jsx'
import Home from './Home/Home'
import Loginpage from './Loginpage'
import SignInSide from './signup'
export default function Pages() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/register" component={SignInSide}/>
                    <Route exact path ='/login' component={Loginpage}/>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path ='/cv' component={cvpage}></Route>
                    <Route exact path ='/guide' component={Blog}></Route>
                    <Route exact path ='/guide/china' component={China}></Route>
                    <Route exact path ='/guide/russia' component={Russia}></Route>
                    <Route exact path ='/guide/germany' component={Germany}></Route>
                    <Route exact path ='/aboutus' component={Aboutus}></Route>
                </Switch>

            </BrowserRouter>
        </>
    )
}
