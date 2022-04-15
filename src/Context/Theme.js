import React, {createContext, useReducer, useContext} from 'react';

//Two context one holding state other holding dispatch
//Auth state context
const ThemeContext = createContext();

const initialState = {
  Theme: localStorage.getItem("theme") || "Dark",
}

export const Dark = "Dark";
export const Light = "Light";

//State reducer
export const ThemeReducer = (state, action)  => {
   switch(action.type){ 
    case Dark :
      return {
        ...state, Theme: action.payload
      }
      case Light :
      return {
        ...state, Theme: action.payload
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


