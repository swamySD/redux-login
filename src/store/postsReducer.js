import { PENDING,SUCCESS,FAILURE } from "./actionTypes"
import { postsFailure,postsPending,postsSuccess } from "./actions"


const initialState={
  laoading:false,
  posts:[],
  error:null
}
const postsReducer=(state=initialState,action)=>{
  switch(action.type){
      case PENDING:
          return {...state,loading:true}
          case SUCCESS:
          return {...state,loading:false,posts:action.payload}
          case FAILURE:
          return {...state,loading:false,error:action.payload}
       default:
       return state   
  }
}

export const getPosts=()=>{
  return (dispatch)=>{
      dispatch(postsPending())
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => dispatch(postsSuccess(json)))
      .catch(error=>dispatch(postsFailure(error)))
  }
}

export default postsReducer
