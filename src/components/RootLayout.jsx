import React, { useEffect } from 'react'
import Sideber from './Sideber'
import { Outlet, useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import { useSelector } from 'react-redux'

const RootLayout = () => {

  let navigate = useNavigate();
  
  let data = useSelector(state => state.activeuser.value);
  
  useEffect(()=> {
    if(data == null) {
      navigate("/login")
    }
  }, [])

  return (
    <Grid container>
        <Grid size={2}>
          <Sideber/>
        </Grid>
        <Grid size={10}>
          <Outlet/>
        </Grid>
      </Grid>

    
  );
}

export default RootLayout