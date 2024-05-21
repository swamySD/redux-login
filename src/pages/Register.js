import React,{useState,useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Link,useNavigate} from 'react-router-dom'
import { registerInitate } from '../store/actions'
import './Register.css'

const Register = () => {
const [state,setState]=useState({
  email:'',password:'',displayName:'',confirmPassword:''
})

const {currentUser}=useSelector((state)=>state.user)

const navigate=useNavigate()
const dispatch=useDispatch()

useEffect(()=>{
 if(currentUser){
navigate('/login')
 }
},[currentUser,navigate])

const {email,password,displayName,confirmPassword}=state
 
const handleChange=(e)=>{
   let {name,value}=e.target;
   setState({...state,[name]:value})
  }


// const submitHandler=(e)=>{
//   e.preventDefault();
//   if(password !== confirmPassword){
//     return ;
//   }
//   dispatch(registerInitate(email,password,displayName))
//   setState({email:'',password:'',confirmPassword:'',displayName:''})
// }

const submitHandler = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    return;
  }

  try {
    // Dispatch the registration action
    await dispatch(registerInitate(email, password, displayName));

    // Navigate to the login page after successful registration
    navigate('/login');
  } catch (error) {
    console.error('Error during registration:', error);
    // Handle registration error (display a message, etc.)
  }

  setState({ email: '', password: '', confirmPassword: '', displayName: '' });
};


return (
    <div>
      <div id="register-form">
        <form className='form-signin' onSubmit={submitHandler}>
          <h1 className='h3 mb-3 font-weight-normal'>
            Sign Up
          </h1>
          <input type='text' id="displayName" className='form-control mb-2' placeholder='Full Name'
         name="displayName" onChange={handleChange}
         value={displayName} required
         />

        <input type='email' id="userEmail" className='form-control mb-2' placeholder='Email Address'
         name="email" onChange={handleChange}
         value={email} required
         />
      <input type='password' id="inputPassword" className='form-control mb-2' placeholder='Password'
         name="password" onChange={handleChange}
         value={password} required
         />
         <input type='password' id="confirmPassword" className='form-control mb-2' placeholder='Confirm Password'
         name="confirmPassword" onChange={handleChange}
         value={confirmPassword} required
         />
        <button className='btn btn-primary btn-block' type='submit'><i className='fas fa-user-plus'></i>Sign Up</button>
        <Link to="/login">
          <i className='fas fa-angle-left'></i>Back
        </Link>
        </form>
      </div>
  </div>
  )
}

export default Register