import React,{useState,useRef, useEffect} from 'react';
import signupGif from "../images/signup.gif";
import { makeStyles } from '@material-ui/core/styles';
import {Button,CssBaseline,TextField,Link,Paper,Grid,Typography} from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error:{
    float:"left",
    color:"red"
  }
}));

export default function SignInSide() {
  
  const classes = useStyles();
  const [fullerrorMessage,setFullerrorMessage]=useState("");
  const [EmailerrorMessage,setEmailerrorMessage]=useState("");
  const [passworderrorMessage,setPassworderrorMessage]=useState("");
  const [repassworderrorMessage,setRepassworderrorMessage]=useState("");
  const fullname=useRef("");
  const email=useRef("");
  const password=useRef("");
  const rePassword=useRef("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    const FullName=fullname.current.value;
    const Email=email.current.value;
    const Password=password.current.value;
    const RePassword=rePassword.current.value;

    
    if(!FullName){
      setFullerrorMessage("Zəhmət olmasa tam adınızı yazın");
    }
    else{
      setFullerrorMessage("");
    }
   if(!Email){
      setEmailerrorMessage("Zəhmət olmasa Email yazın");
    }
    else if( !(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Email))){
      setEmailerrorMessage("Email düzgün deyil");
    }
    else{
      setEmailerrorMessage("");
    }
    if(!Password){
      setPassworderrorMessage("Zəhmət olmasa şifrənizi yazın");
    }
    else{
      setPassworderrorMessage("");
    }
    if(Password!==RePassword){
      setRepassworderrorMessage("Şifrə düzgün deyil");
    }
    else{
      setRepassworderrorMessage("");
    }
  }
  const [status ,setStatus] =useState(0)
  const history = useHistory()
  const [msg ,setMsg] = useState('')
  useEffect(()=>  {
    if(status === 1){ 
        history.push('/')
      
    }
    else if (status === -1){
      alert(msg)
    }
    
    else if(status === -200) {
      alert('Something went wrong')
    }
  },[status,msg])
  const sendData=(json)=>{
            const{fullname,email,password,rePassword}=(json)
            if(fullname !== '' && email !==''&& password !==''&& rePassword !=='' && fullname !== null && email !=null && password !=null&& rePassword !=null){
                if(password === rePassword){
                    try{
                        axios.post('http://localhost:5000/register',{
                            fullname: fullname,
                            password:password,
                            repeat_password :rePassword,
                            email : email
                        })
                        .then(result=>{
                            console.log(result.data.message)
                            if(result.data.status === 1){
                                // console.log({msg :result.data.message})
                                setMsg(result.data.message)
                                setStatus(1)
                                return {msg :result.data.message,
                                        status:1
                                }
                            }else {
                                setMsg(result.data.message)
                                setStatus(-1)
                                // console.log({msg :result.data.message})
                                return {msg :result.data.message,
                                    status:-1}
                            }
                        })
                        .catch(err=>{
                            console.log(err)
                            setStatus(-200)
                            return {status : -200}
                        })
                    }catch(err){
                        console.log(err)
                        setStatus(-200)
                        
                        return {status : -200}
                    }
                }
            }
        }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={12} md={12} lg={7} >
          <img xs={false} style={{width: '100%', height: 'auto',marginTop:"-30px"}}src={signupGif}/>
      </Grid>
      <Grid  item xs={12} sm={12} md={12} lg={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
           <h1 style={{ textShadow:" 2px 2px #1976d2"}}> Qeydiyyat </h1>
          </Typography>
         
          <form onSubmit={(e)=>{handleSubmit(e)}} className={classes.form}  noValidate>
         <div>
            <TextField
            inputRef={fullname}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="fullName"
              label="Tam adınız"
              name="fullname"
              autoFocus
            />
            {fullerrorMessage?<div className={classes.error}>*{fullerrorMessage}</div>:null}
          </div>
          <div>
            <TextField
              inputRef={email}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
              {EmailerrorMessage?<div className={classes.error}>*{EmailerrorMessage}</div>:null}
            </div>
            <div>
            <TextField
              inputRef={password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Şifrə"
              type="password"
              id="password"
              autoComplete="current-password"
            />
              {passworderrorMessage?<div className={classes.error}>*{passworderrorMessage}</div>:null}
            </div>
            <div>
            <TextField
              inputRef={rePassword}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="re-password"
              label="Şifrənizi yenidən yazın"
              type="password"
              id="re-password"
              autoComplete="current-password"
            />
              {repassworderrorMessage?<div className={classes.error}>*{repassworderrorMessage}</div>:null}
            </div>
            <Button onClick={()=>{
              const json ={
                fullname:fullname.current.value,
                email:email.current.value,
                password:password.current.value,
                rePassword:rePassword.current.value,
              }
                sendData(json)
                
                
            }}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              
            >
              Daxil ol
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Hesabınız var?"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}