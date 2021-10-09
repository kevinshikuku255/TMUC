import React, {createContext, useReducer, useContext} from 'react'

//Two context one holding state other holding dispatch
const PostContext = createContext();


export const postsInitialState = {
  posts: []
}


export const ADD_POSTS = "ADD_POSTS";
export const ADD_POST = "ADD_POST";


//Message reducer
const  postsReducer = (state, action) =>{
  const { posts } = state;
   switch(action.type){
      case ADD_POSTS:
        return {
         ...state,
         posts:  action.payload
        }

       case ADD_POST:
         let newPosts = [...posts, action.payload ]
        return {
         ...state,
         posts:  newPosts
        }

      default:
       throw new Error(`unknown action type ${action.type}`)
   }
};

//Provider that will export and use in the App.js
export const PostProvider = ({children}) => {
   return(
    <PostContext.Provider value={ useReducer(postsReducer, postsInitialState)}>
                   {children}
    </PostContext.Provider>
   )
}


//Export what is held inside usecontext
/** Global posts context */
export const usePostsContext = () => useContext(PostContext);

