import React, {createContext, useReducer, useContext} from 'react';

//Two context one holding state other holding dispatch
//Auth state context
const LoadContext = createContext();


const initialState = {
  loading:false,
  open:false ,
  menu: false
}


export const LOAD = "LOAD";
export const OFFLOAD = "OFFLOAD";
export const CLOSE = "CLOSE";
export const OPEN = "OPEN";
export const MENU = "MENU"


//State reducer
export const loadReducer = (state, {type, payload})  =>{

   switch(type){
    case LOAD :
      return {
        ...state,
        loading: payload
      }
    case OFFLOAD :
      return {
        ...state,
        loading: payload
      }
    case CLOSE :
      return {
        ...state,
        open: payload
      }

   case OPEN :
      return {
        ...state,
        open: payload
      }
   case MENU :
    return {
      ...state,
      menu: payload
    }
      default:
        console.log(type, payload)
       throw new Error(`unknown action type ${type}`)
   }
}


//Provider that will export and use in the App.js
export const LoadProvider = ({children}) => {
   return(
    <LoadContext.Provider value={useReducer(loadReducer, initialState )}>
                   {children}
    </LoadContext.Provider>
   )
}


//Export uwhat is held inside usecontext
/** Loading state */
export const useLoadContext = () => useContext(LoadContext);


