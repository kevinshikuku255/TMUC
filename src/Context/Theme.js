import React, {createContext, useReducer, useContext} from 'react';

//Two context one holding state other holding dispatch
//Auth state context
const ThemeContext = createContext();

const initialState = {
  Theme: localStorage.getItem("theme") || "Dark",
  Home:  localStorage.getItem("home") || "Icons",
}

export const Dark = "Dark";
export const Light = "Light";
export const Icons = "Icons";
export const Buttons = "Buttons";

//State reducer
export const ThemeReducer = (state, action)  => {
   switch(action.type) { 
    case Dark :
      return {
        ...state, Theme: action.payload
      }
      case Light :
      return {
        ...state, Theme: action.payload
      }
      case Icons :
      return {
        ...state, Home: action.payload
      }
      case Buttons :
      return {
        ...state, Home: action.payload
      }
      default:
       throw new Error(`unknown action type ${action.type}`)
   }
}


//Provider that will export and use in the App.js
export const ThemeProvider = ({children}) => {
   return(
    <ThemeContext.Provider value={useReducer(ThemeReducer, initialState )}>
                   {children}
    </ThemeContext.Provider>
   )
}


//Export uwhat is held inside usecontext
/** Theming state */
export const useThemeContext = () => useContext(ThemeContext);


