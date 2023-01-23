import React, { useState } from 'react';
import '../../App.css';
import Box from '@mui/material/Box';
import { FormGroup } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { setCookie } from './Cookie/CookieHelpers';
import { useForm } from 'react-hook-form';



// import Navbar from '../../Navbar/Navbar';

// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


 
export default function Login(props) {
  const {register } = useForm();
    const [usr,setUsr] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();
    const  [message,setMessage] = useState("");
    // const [loading,setLoading] = useState("");

    // const [body, setBody] = useState("");

    const onNameChange = e => setUsr(e.target.value);
    const onPasswordChange = e => setPwd(e.target.value);                         
    // const onBodyChange = e => setBody(e.target.value);
    


    const handleSubmit = e => {
      e.preventDefault();
      const data = { usr,pwd, };
      const { updateUser, updateUserOrganization, isMaster } = props;
      const requestOptions = {  
        // mode: 'no-cors'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ,
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
        
      };


    
 


      fetch("http://library.test:8001/api/method/maze.auth.login", requestOptions,)
        .then(response=> response.json())
        .then((response) => 
        {
         console.log(response)


          // const { key: accessToken, details: userDetails } = response;
          
          const { full_name,home_page, message:{email,message,sid,token, status}} = response;
          if(status == false){
            setMessage(message);
            return ;
          }
          setCookie(token);
          navigate("/home");


          // updateUser ({ accessToken, userDetails });
          // response.json()



        //   const { full_name,home_page, message:{email,message,sid,status,token} } = response;
        //   console.log(full_name,home_page, response,token);
        // const msg='name'+full_name+'home'+home_page+email+message+sid+status+token;
        // console.log(msg)
        }
        )
        .then(res => console.log(res));
    };
    
      return (
      <div className="container">
        {/* <Container fixed> */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }} onSubmit={handleSubmit} noValidate autoComplete="on">
            <form className="loginform">
            <h1 className='headerTitle'>Login</h1>
            
              <FormGroup className="form-group">
              <FormControl sx={{ m: 1, width: '25ch',height:'5ch' }} variant="standard">
              <InputLabel
             
              
              htmlFor="standard-adornment-text">User Name</InputLabel>
              <Input
                // {...register('usr',{ required:true })}
                id="standard-adornment-text"
                type="text"
                name='usr'
                onChange={ onNameChange }
                />

            </FormControl>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
                </InputLabel>
              <Input
              //  {...register('pwd',{ required:true })}
                id="standard-adornment-password"
                type="password"
                name='pwd'
                value={ pwd }
                onChange={ onPasswordChange }
                />
            </FormControl>

            <Button 
            className="button"  
            variant="contained"
             onClick={handleSubmit} 
            style={{borderRadius:'50px'}}>Login</Button>
            
                          </FormGroup>
                          <h2 style={{color:"red",fontSize:'12px',position:'top'}}>  { message ? message:null }  </h2>     
            </form>
           
        </Box>
      
      </div>
      )
  }