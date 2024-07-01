import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate,redirect } from 'react-router-dom'
import './Home.css'
import { logoutInitate } from '../store/actions';
const Home = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
 const {currentUser}= useSelector((state)=>state.user)
 useEffect(() => {
  console.log('Checking authentication for redirection...');
  if (!currentUser) {
    navigate('/login');
  }
}, [currentUser, navigate]);
  const handleLogout=()=>{
    console.log('Logging out...')
    dispatch(logoutInitate())
    navigate('/login')
    
  }

  console.log("hi")

  // if (!currentUser) {
  //   return   navigate('/login')
  // }

  return (
    <div>
      <h2>Welcome to our site</h2>
      <br />
      <button className='btn btn-danger logout-button' 
      
      onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home