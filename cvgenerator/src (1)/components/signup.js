import React,{useState,useRef} from 'react';
import signupGif from "../images/signup.gif";
import { makeStyles } from '@material-ui/core/styles';
import {Button,CssBaseline,TextField,Link,Paper,Grid,Typography} from '@material-ui/core';

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
      setFullerrorMessage("Please write yout full name");
    }
    else{
      setFullerrorMessage("");
    }
   if(!Email){
      setEmailerrorMessage("Please write yout email");
    }
    else if( !(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Email))){
      setEmailerrorMessage("Please write correct email");
    }
    else{
      setEmailerrorMessage("");
    }
    if(!Password){
      setPassworderrorMessage("Please write your password");
    }
    else{
      setPassworderrorMessage("");
    }
    if(Password!==RePassword){
      setRepassworderrorMessage("Passwords doesn't match");
    }
    else{
      setRepassworderrorMessage("");
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
           <h1 style={{ textShadow:" 2px 2px #1976d2"}}> Sign Up </h1>
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
              label="Full Name"
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
              label="Email Address"
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
              label="Password"
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
              label="Rewrite Password"
              type="password"
              id="re-password"
              autoComplete="current-password"
            />
              {repassworderrorMessage?<div className={classes.error}>*{repassworderrorMessage}</div>:null}
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              
            >
              Sign Up
            </Button>
            <Grid container>
         
              <Grid item>
                <Link href="#" variant="body2">
                  {"You have an account?"}
                </Link>
              </Grid>
            </Grid>
   
          </form>
        </div>
      </Grid>
    </Grid>
  );
}