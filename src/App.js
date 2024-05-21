import Login from './pages/Login';
import { useEffect } from 'react';
import Register from './pages/Register';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { Outlet } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Posts from './components/Posts';
import Post from './components/Post';
import { useDispatch } from 'react-redux';
import { getPosts } from './store/postsReducer';
import UserRoute from './components/UserRoute';
import { auth } from './firebase';
import { setUser } from './store/actions';
export const Index=()=>{
  const dispatch=useDispatch()


  const fetchPosts =  () => {
    try{
       dispatch(getPosts());
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path:'',
    element:<Home/>},
    {path:'about',
    element:<About/>}
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/posts",
    loader: () => {
      fetchPosts();
      
      return null
     // Return null or a component if needed
    }
    ,
    
    element: <UserRoute/>,
    children: [
      { path: '', element: <Posts /> },
      { path: ':id', element: <Post /> },
    ],
  },
  // {
  //   path: "posts/:id",
  //   element: <Post/>,
  // },
]);

return <RouterProvider router={router}/>
}

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
if(authUser){
  dispatch(setUser(authUser))
}else{
  dispatch(setUser(null))
}
    })
  },[dispatch])
  return (
    <div className="App">
    <UserRoute>
    <Header/>
    <Outlet/>
    <Footer/>
    </UserRoute>
    
    </div>
  );
}

export default App;
