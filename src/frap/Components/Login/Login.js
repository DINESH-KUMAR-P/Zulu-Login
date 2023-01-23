// import React, { useState } from 'react';
// import '../../App.css';
// import Box from '@mui/material/Box';
// import { FormGroup } from '@mui/material';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Input from '@mui/material/Input';
// import Button from '@mui/material/Button';
// // import { useNavigate } from 'react-router-dom';
// import{useFormik} from 'formik';
// import * as yup from 'yup';

// const formValidationSchema = yup.object({
//     username: yup.string().required("Requird username"),
//     password: yup.string().required("Required password")
    
//   })

// export default function Login() {
//     const {handleSubmit} = useFormik({
//         initialValues:{
//             username:"",
//             password:"",
//         },

//         validationSchema: formValidationSchema,
//         onSubmit:(userLogin) => {
//           onLogin(userLogin)
//         }
//     })

//     // const navigate = useNavigate();
//     const onLogin = (userLogin) => {
//         fetch("http://zulu.mazeworkssolutions.com/api/method/login",{
//       method:"POST",
//       headers:{'Content-Type': 'application/json',
//      body:JSON.stringify(userLogin),
//         } 
      
//     })
//     .then((res)=> console.log(res))

//     }      


//   return (
//   <div className="container">
//     {/* <Container fixed> */}
//     <Box sx={{ display: 'flex', flexWrap: 'wrap' }} onSubmit={handleSubmit} noValidate autoComplete="off">
//         <form className="loginform">
//         <h1 className='headerTitle'>Login</h1>
        
//           <FormGroup className="form-group">
//           <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
//           <InputLabel htmlFor="standard-adornment-text">Username</InputLabel>
//           <Input
//             id="standard-adornment-text"
//             type="text"
//             name='username'
//             // value={ username }
//             />
//         </FormControl>
//           <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
//           <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
//           <Input
//             id="standard-adornment-password"
//             type="password"
//             name='password'
//             // value={ password }
//             />
//         </FormControl>
//         <Button 
//         className="button" 
//         variant="contained"
//          onClick={onLogin} 
//         style={{borderRadius:'50px'}}>Login</Button>
//           </FormGroup>
       
//         </form>
//     </Box>
//   </div>
//   )
// }


import React, { useState } from 'react';
import '../../App.css';
import Box from '@mui/material/Box';
import { FormGroup } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { setCookie } from './Cookie/CookieHelpers';
// import { useNavigate } from 'react-router-dom';
// import{useFormik} from 'formik';
// import * as yup from 'yup';


export default function Login(props) {
    const [usr,setUsr] = useState("");
    const [pwd, setPwd] = useState("");
    // const [body, setBody] = useState("");
    
    const onNameChange = e => setUsr(e.target.value);
    const onPasswordChange = e => setPwd(e.target.value);
    // const onBodyChange = e => setBody(e.target.value);
    
    const handleSubmit = e => {
      e.preventDefault();
      const data = { usr,pwd, };
      const { updateUser, updateUserOrganization, isMaster } = props;
      const requestOptions = {  
        // mode: 'no-cors',
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
      };
      fetch("http://zulu.mazeworkssolutions.com/api/method/login", requestOptions,)
        .then(({response}) => 
        {
          const { key: accessToken, details: userDetails } = response;
          setCookie(accessToken);
          updateUser ({ accessToken, userDetails });
          response.json()
        }
        )
        .then(res => console.log(res));
    };
    
    
      return (
      <div className="container">
        {/* <Container fixed> */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }} onSubmit={handleSubmit} noValidate autoComplete="off">
            <form className="loginform">
            <h1 className='headerTitle'>Login</h1>
            
              <FormGroup className="form-group">
              <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-text">User mail</InputLabel>
              <Input
                id="standard-adornment-text"
                type="text"
                name='usr'
                onChange={ onNameChange }
                />

            </FormControl>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
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
           
            </form>
        </Box>
      </div>
      )
    }