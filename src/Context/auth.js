import jwtDecode from 'jwt-decode';
import React, {createContext, useReducer, useContext} from 'react'

//Two context one holding state other holding dispatch
//Auth state context
const AuthContext = createContext();


let user
const token = localStorage.getItem("jwt");
if(token){
 const decodedToken = jwtDecode(token)
 const expiresAt = new Date(decodedToken.exp * 10000)

 if(new Date() > expiresAt){
     localStorage.removeItem("jwt")
 } else{
  user = decodedToken
 }
}

export const authInitialState = { user }
export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"


//Auth reducer
export const authReducer = (state, action) =>{
   switch(action.type){
    case LOG_IN :
      return {
        ...state,
        user: action.payload
      }

      case LOG_OUT :
       localStorage.removeItem("jwt")
      return {
       ...state,
       user: ""
      }
      
      default:
       throw new Error(`unknown action type ${action.type}`)
   }
}

//Provider that will export and use in the App.js
export const AuthProvider = ({children}) => {
   return(
    <AuthContext.Provider value={useReducer(authReducer, authInitialState)}>
                   {children}
    </AuthContext.Provider>
   )
}


//Export what is held inside usecontext
/** Global auth context with both state and dispatch actions */
export const useAuthContext = () => useContext(AuthContext);

