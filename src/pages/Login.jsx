import React from "react";
import Grid from '@mui/material/Grid';
import regImage from '../assets/reg.png'
import Image from '../components/Image'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

// firebase auth code:
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// firebase auth code:

// react tostify;
import { ToastContainer, toast } from 'react-toastify';
// react tostify;

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

const Login = () => {

  // firebase auth code:
  const auth = getAuth();
  // firebase auth code:

  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailerror, setEmailError] = useState("");
  const [passworderror, setPasswordError] = useState("");

  let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  let lowercase_letter = /^(?=.*[a-z])/;
  let uppercase_letter = /(?=.*[A-Z])/;
  let digit = /(?=.*\d)/;
  let special_character = /(?=.*[@$!%*?&])/;
  let length_character = /[A-Za-z\d@$!%*?&]{8,}$/;

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  let handleSignUp = () => {
    if (!email) {
      setEmailError("Enter your email");
    } else if (!emailregex.test(email)) {
      setEmailError("Enter valid email");
    }
    if (!password) {
      setPasswordError("Enter your Password");
    } else if (!lowercase_letter.test(password)) {
      // setPasswordError("Enter your strong Password like- abDFG68@")
      setPasswordError("Enter lowercase letter");
    } else if (!uppercase_letter.test(password)) {
      setPasswordError("Enter uppercase letter");
    } else if (!digit.test(password)) {
      setPasswordError("Enter number digit");
    } else if (!special_character.test(password)) {
      setPasswordError("Enter special character");
    } else if (!length_character.test(password)) {
      setPasswordError("Enter 8.. character");
    }

    if (
      email &&
      emailregex.test(email) &&
      password &&
      lowercase_letter.test(password) &&
      uppercase_letter.test(password) &&
      digit.test(password) &&
      special_character.test(password) &&
      length_character.test(password)
    ) {
      
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            toast("login successfully")

            setInterval(() => {
              navigate("/home")
            }, 2000);
            
          })
          .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode)
            if (errorCode.includes("auth/invalid-credential")) {
              toast.error("invalid username or password")
            } else if (errorCode.includes("auth/too-many-requests")) {
              toast.error("try letter....")
            }
          });

    }
  };

  return (
    <Grid container>
      <Grid size={6}>
        {/* react tostify; */}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {/* react tostify; */}
        <div className="flex justify-end items-center h-full">
          <div className="w-[560px]">
            <h2 className="text-34 text-primary font-bold font-nonito">
              Login to your account!
            </h2>
            <div className="flex gap-2 items-center py-[15px] px-[29px] w-[220px] border border-seagreen/30 rounded-2xl  mt-[30px] cursor-pointer">
              <FcGoogle className="text-2xl" />
              <p className="font-Opensans font-semibold text-sm">
                Login with Google
              </p>
            </div>
            <CssTextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              onChange={handleEmail}
            />
            {emailerror && (
              <p className="bg-red-500 text-white rounded py-2 px-3 w-[70%] mt-2">
                {emailerror}
              </p>
            )}

            <CssTextFieldtwothree
              id="outlined-basic"
              label="Password"
              variant="outlined"
              onChange={handlePassword}
            />
            {passworderror && (
              <p className="bg-red-500 text-white rounded py-2 px-3 w-[70%] mt-2">
                {passworderror}
              </p>
            )}
            <BootstrapButton
              className="hover:shadow-none!"
              variant="contained"
              onClick={handleSignUp}
            >
              Log in
            </BootstrapButton>
            <p className="ml-[90px]">
              Don’t have an account ?{" "}
              <Link to="/">
                <span className="text-[#EA6C00] font-semibold">Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </Grid>
      <Grid size={6}>
        <Image
          classname={`w-full h-screen object-cover`}
          src={regImage}
          alt={`reg img`}
        />
      </Grid>
    </Grid>
  );
};

export default Login;
