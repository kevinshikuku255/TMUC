import React, {createContext, useReducer, useContext} from 'react'

//Two context one holding state other holding dispatch
//Auth state context
const PostStateContext = createContext();

//Dispatch state context
const PostDispatchContext = createContext();




//Message reducer
const postReducer = (state, action) =>{
   switch(action.type){

       case "ADD_POST":
        return {
         ...state,
         posts:  action.payload
        }

      default:
       throw new Error(`unknown action type ${action.type}`)
   }
}

//Provider that will export and use in the App.js
export const PostProvider = ({children}) => {
  const [state, dispatch] = useReducer(postReducer, { posts: []   })
   return(
    <PostDispatchContext.Provider value={dispatch}>
        <PostStateContext.Provider value ={state}>
                   {children}
        </PostStateContext.Provider>
    </PostDispatchContext.Provider>
   )
}


//Export what is held inside usecontext
export const usePostState = () => useContext(PostStateContext);
export const usePostDispatch = () => useContext(PostDispatchContext);
