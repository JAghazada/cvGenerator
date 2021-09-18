import axios from "axios";
axios.post('http://localhost:5000/login',{
        "email":"loccoeehqwjk@gmail.com",
        "password":"locco"
})
.then(response=>{
    const token =  response.data
    console.log(token)
    axios.post('http://localhost:5000/posts',{
    },{
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
    })
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
})
.catch(err=>{
    console.log(err)
})
