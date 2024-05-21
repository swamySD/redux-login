import React from 'react'
import { useNavigate,Outlet } from 'react-router-dom'
import LoadingToRedirects from './Redirect'
import { useSelector } from 'react-redux'

// const UserRoute = ({children,...rest}) => {
//     const {currentUser}=useSelector((state)=>state.user)
//   return (
//     currentUser ? <Route {...rest}/>:
//     <LoadingToRedirect/>
//   )
// }

const UserRoute = () => {
    const { currentUser } = useSelector((state) => state.user);
    const navigate = useNavigate();
  
    if (!currentUser) {
      return <LoadingToRedirects/>
    }
  
    return <Outlet />;
  };
  

export default UserRoute