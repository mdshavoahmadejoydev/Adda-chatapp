import Grid from '@mui/material/Grid';
import regImage from '../assets/reg.png'
import Image from '../components/Image'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import { useState } from 'react';

const BootstrapButton = styled(Button)({
  background: '#5F35F5',
  border: '1px solid',
  padding: '6px 12px',
  fontSize: '20px',
  color: 'white',
  borderRadius: '50px',
  width: '70%',
  marginTop: '51px',
  marginBottom: '34px',
  fontFamily: 'Open Sans',
  boxShadow: 'none',
  '&:hover': {
    shadow: 'none'
  }
});


const CssTextField = styled(TextField)({
  width: '70%',
  marginTop: '51px'
});
const CssTextFieldtwothree = styled(TextField)({
  width: '70%',
  marginTop: '33px'
});

const Registration = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


  let handleEmail = (e) => {
    setEmail(e.target.value)
  }
  let handleFullName = (e) => {
    setName(e.target.value)
  }
  let handlePassword = (e) => {
    setPassword(e.target.value)
  }


  let handleSignUp = () => {
    console.log(email);
    console.log(name);
    console.log(password);
  }


  return (
    <Grid container>
      <Grid size={6}>
        <div className='flex justify-end items-center h-full'>
          <div className='w-[560px]'>
            <h2 className='text-34 text-primary font-bold font-nonito'>Get started with easily register</h2>
            <p className='text-lg text-black/50 font-normal font-nonito pt-3'>Free register and you can enjoy it</p>
            <CssTextField id="outlined-basic" label="Email Address" variant="outlined" onChange={handleEmail}/>
            <CssTextFieldtwothree id="outlined-basic" label="Full Name" variant="outlined" onChange={handleFullName}/>
            <CssTextFieldtwothree id="outlined-basic" label="Password" variant="outlined" onChange={handlePassword}/>
            <BootstrapButton className='hover:shadow-none!' variant="contained" onClick={handleSignUp}>Sign up</BootstrapButton>
            <p className='ml-[100px]'>Already  have an account ? <span className='text-[#EA6C00] font-semibold'>Sign In</span></p>
          </div>
        </div>       
      </Grid>
      <Grid size={6}>
        <Image classname={`w-full h-screen object-cover`} src={regImage} alt={`reg img`} />
      </Grid>
    </Grid>
  );
};

export default Registration;
