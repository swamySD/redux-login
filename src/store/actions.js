import { PENDING,SUCCESS,FAILURE,REGISTER_START,REGISTER_SUCCESS,REGISTER_FAILURE, LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_START, LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAILURE, SET_USER, GOOGLE_SIGNIN_FAILURE } from "./actionTypes"
import {auth,googleAuthProvider } from '../firebase.js'

export const postsPending=()=>{
    return{
        type:PENDING
    }
}

export const postsSuccess=(json)=>{
    return{
        type:SUCCESS,
        payload:json
    }
}

export const postsFailure=(error)=>{
    return{
        type:FAILURE,
        payload:error,
    }
}

export const registerStart=()=>{
    return{
        type:REGISTER_START,
    }
}


export const registerSuccess=(user)=>{
    return{
        type:REGISTER_SUCCESS,
        payload:user
    }
}


export const registerFailure=(error)=>{
    return{
        type:REGISTER_FAILURE,
        payload:error
    }
}



export const loginStart=()=>{
    return{
        type:LOGIN_START,
    }
}

export const loginSuccess=(user)=>{
    return{
        type:LOGIN_SUCCESS,
        payload:user
    }
}

export const loginFailure=(error)=>{
    return{
        type:LOGIN_FAILURE,
        payload:error
    }
}


export const logoutStart=()=>{
    return{
        type:LOGOUT_START,
    }
}

export const logoutSuccess=(user)=>{
    return{
        type:LOGOUT_SUCCESS,
        
    }
}

export const logoutFailure=(error)=>{
    return{
        type:LOGOUT_FAILURE,
        payload:error
    }
}

export const setUser=(user)=>{
    return{
        type:SET_USER,
        payload:user,
    }
}


export const googleSignInStart=()=>{
    return{
        type:GOOGLE_SIGNIN_FAILURE,
    }
}

export const googleSignInSuccess=(user)=>{
    return{
        type:GOOGLE_SIGNIN_FAILURE,
        payload:user
    }
}

export const googleSignInFailure=(error)=>{
    return{
        type:GOOGLE_SIGNIN_FAILURE,
        payload:error
    }
}


export const registerInitate=(email,password,displayName)=>{
 return  (dispatch)=>{
     dispatch(registerStart())
     auth.createUserWithEmailAndPassword(email,password)
     .then(({user})=>{
        user.updateProfile({
            displayName
        })
        dispatch(registerSuccess(user))
     }).catch((error)=>{
        dispatch(registerFailure(error.message))
     })
 }
}



export const loginInitate=(email,password)=>{
    return  (dispatch)=>{
        dispatch(loginStart())
        auth.signInWithEmailAndPassword(email,password)
        .then(({user})=>{
        
           dispatch(loginSuccess(user))
        }).catch((error)=>{
           dispatch(loginFailure(error.message))
        })
    }
   }

   export const logoutInitate=()=>{
    return  (dispatch)=>{
        dispatch(logoutStart())
        auth.signOut()
        .then((res)=>{
        
           dispatch(logoutSuccess())
        }).catch((error)=>{
           dispatch(logoutFailure(error.message))
        })
    }
   }


   export const googleSignInInitate=()=>{
    return  (dispatch)=>{
        dispatch(googleSignInStart())
        auth.signInWithPopup(googleAuthProvider)
        .then(({user})=>{
        
           dispatch(googleSignInSuccess(user))
        }).catch((error)=>{
           dispatch(googleSignInFailure(error.message))
        })
    }
   }

   