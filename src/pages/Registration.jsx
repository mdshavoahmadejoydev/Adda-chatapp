import Grid from '@mui/material/Grid';
import regImage from '../assets/reg.png'
import Image from '../components/Image'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';

const BootstrapButton = styled(Button)({
  background: '#5F35F5',
  border: '1px solid',
  padding: '6px 12px',
  fontSize: '40',
  color: 'white',
  borderRadius: '100%',
  width: '70%',
  marginTop: '51px',
  marginBottom: '34px',
  fontFamily: 'Opensans',
  boxShadow: 'none'
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
  return (
    <Grid container>
      <Grid size={6}>
        <div className='flex justify-end items-center h-full'>
          <div className='w-[560px]'>
            <h2 className='text-34 text-primary font-bold font-nonito'>Get started with easily register</h2>
            <p className='text-lg text-black/50 font-normal font-nonito pt-3'>Free register and you can enjoy it</p>
            <CssTextField id="outlined-basic" label="Email Address" variant="outlined" />
            <CssTextFieldtwothree id="outlined-basic" label="Full Name" variant="outlined" />
            <CssTextFieldtwothree id="outlined-basic" label="Password" variant="outlined" />
            <BootstrapButton className='test-[#FFFFFF]! py-3! rounded-full! bg-[#5F35F5]! w-[70%] mt-10! mb-5!' variant="contained">Sign up</BootstrapButton>
            <p>Already  have an account ? <span className='text-[#EA6C00] font-semibold'>Sign In</span></p>
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
