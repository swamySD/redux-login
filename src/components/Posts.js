import React from 'react'
import { useSelector } from 'react-redux'
import {useLoaderData } from 'react-router-dom';
const Posts = () => {
  const posts=useSelector((state)=>state.Posts)
//   const location = useLocation();
// const dispatch=useDispatch()
const loaderData = useLoaderData();
console.log(loaderData)


// useEffect(()=>{
// dispatch(getPosts())
// },[dispatch])

// useEffect(() => {
//   // Load data when using useEffect (client-side)
//   if (!loaderData && location.pathname === '/posts') {
//     dispatch(getPosts());
//   }
// }, [dispatch, loaderData, location.pathname]);


  return (
    <div>
      {posts.posts.map(item=>
        (<div key={item.id}>
             <h1 style={{fontSize:'10px'}}>{item.title}</h1>
            </div>
        ))}
    </div>
  )
}

export default Posts