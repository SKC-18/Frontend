import {React, useState} from 'react';
import {Paper, Grid, Avatar, TextField, Typography, Button, Link}  from '@material-ui/core'
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function SignUp(){
    const paperStyle={padding:20, height:'100h', width:280, margin:"20px auto"}
    const avtstyle={backgroundColor:'#b87aeb' }
    const txtstyle={margin:'09px 0px'}
    const btmstyle={margin: '8px 0px ', backgroundColor:'#b87aeb'}
    //const initialValues = {email:"",username:"", phoneno:"", password:"" }
    //const[formValues, setFormValues] = useState(initialValues);

    // const USER_REGEX = /^[A-zA-Z][a-zA-Z0-9-_]{3,23}$/; //validate username
    // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; //validate password

    return(
   <div >
   <Grid>
      <Paper elevation={10} style={paperStyle}>
       <Grid align='center'>
        <Avatar style ={avtstyle}> <BorderColorTwoToneIcon /> </Avatar>
        <h2> SIGN UP </h2> 
        <Typography variant='caption'> Please fill the following details: </Typography>
        <form>
        <TextField label='Full Name' name='fullname' placeholder='Enter your name' variant='filled' style={txtstyle} fullWidth required /> 
        <TextField label='UserName' name='username' placeholder='Enter your username' /*value={formValues.username}*/ variant='filled'  style={txtstyle} fullWidth required /> 
        <TextField label='Email'  name='email' placeholder='Enter your email id' /*value={formValues.email}*/ variant='filled' style={txtstyle} fullWidth required /> 
        <TextField label='Phone No'  name='phoneno' placeholder='Enter your phone no.' /*value={formValues.phoneno}*/ variant='filled' style={txtstyle} fullWidth required /> 
        <TextField label='BirthDate'  placeholder=' DD/MM/YY ' variant='filled' style={txtstyle} fullWidth required /> 
        
        <TextField label='Password' name='password' placeholder='Enter password' /*value={formValues.password}*/ variant='filled' style={txtstyle} type='password' fullWidth required/>
        <TextField label='Confirm Password' name='password' placeholder='Enter password again' /*value={formValues.password}*/ variant='filled' style={txtstyle} type='password' fullWidth required/>
        <FormControlLabel control={<Checkbox defaultunChecked />} label=" I accept the terms and conditions" />
        <Button type='submit' variant="contained" style={btmstyle} fullWidth >Sign up</Button>

        <Typography> Already have an account?
        <Link href="/SignIn" > SignIn
        </Link>
        </Typography>
        </form>
       </Grid>
      </Paper>
    </Grid>
  
    </div>
    )
}

