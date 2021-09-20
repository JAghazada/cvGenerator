import { configureStore } from "@reduxjs/toolkit";
import signup from './Components/Slices/signup.slice'
const store = configureStore({
    reducer :{
        signup
    }
})
export default store