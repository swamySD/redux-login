import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link,useNavigate} from 'react-router-dom'
import './Login.css'
import { googleSignInInitate, loginInitate } from '../store/actions'

const Login = () => {
const [state,setState]=useState({
  email:'',password:''
})

const {currentUser}=useSelector((state)=>state.user)
console.log(currentUser)
const navigte=useNavigate()
const dispatch=useDispatch()

useEffect(()=>{
 if(currentUser){
navigte('/')
 }
},[currentUser,navigte])



const {email,password}=state
  const handleGooglesignIn=()=>{
    dispatch(googleSignInInitate())
     
  }

  const handleFacebooksignIn=()=>{

  }

  const handleChange=(e)=>{
    let {name,value}=e.target;
    setState({...state,[name]:value})
  }
const submitHandler=(e)=>{
  e.preventDefault()
  if(!email || !password){
    return
  }
  dispatch(loginInitate(email,password))
  setState({email:'',password:''})
  navigte('/')
}

  return (
    <div>
      <div id="logreg-forms">
        <form className='form-signin' onSubmit={submitHandler}>
          <h1 className='h3 mb-3 font-weight-normal'>
            sign In
          </h1>
          <div className='social-login'>
            <button className='btn google-btn social-btn' type="button" onClick={handleGooglesignIn}>
              <span>
                <i className='fab fa-google-plus-g'></i> Sign in with google+
              </span>
            </button>
            <button className='btn facebook-btn social-btn' type="button" onClick={handleFacebooksignIn}>
              <span>
                <i className='fab fa-facebook'></i> Sign in with facebook
              </span>
            </button>
        </div>
        <p style={{textAlign:'center'}}>OR</p>
        <input type='email' id="inputEmail" className='form-control' placeholder='Email Address'
         name="email" onChange={handleChange}
         value={email} required
         />
      <input type='password' id="inputPassword" className='form-control' placeholder='Password'
         name="password" onChange={handleChange}
         value={password} required
         />
       <button className='btn btn-secondary btn-block' type='submit'><i className='fas fa-sign-in-alt'></i>Sign In</button>
         <hr />
          <p>Don't have a account</p>
          <Link to="/register">
          <button className='btn btn-primary btn-block' type='button' id="btn-signup">
            <i className='fas fa-user-plus'></i>Sign up New account
          </button>
          </Link>
        </form>
      </div>
  </div>
  )
}

export default Login