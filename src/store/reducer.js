
import * as types from './actionTypes';
const initalState={
    loading:false,
    currentUser:null,
    error:null,
}

const userReducer=(state=initalState,action)=>{

    switch (action.type) {
        case types.REGISTER_START:
         case types.LOGIN_START: 
         case types.LOGOUT_START: 
         case types.GOOGLE_SIGNIN_START:
        return {
                ...state,
                loading:true,
            }

        case types.LOGOUT_SUCCESS:
            return{
                ...state,currentUser:'null',loading:false,error:null
            };
        case types.SET_USER:
            return{
                ...state,
                loading:false,
                currentUser:action.payload
            }           
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
        case types.GOOGLE_SIGNIN_SUCCESS:
            return{
                ...state,
                loading:false,
                currentUser:action.payload
                
            }
        
        case types.REGISTER_FAILURE:
        case types.LOGIN_FAILURE:
        case types.LOGOUT_FAILURE:
        case types.GOOGLE_SIGNIN_FAILURE:    
            return{
                ...state,
                loading:false,
                error:action.payload
            }
    default:
        return state
    }
}

export default userReducer