import { usePostsContext } from "./post";
import { useAuthContext } from "./auth";
import { useLoadContext } from "./loading";

import { AuthProvider } from "./auth";
import { PostProvider } from "./post";
import { LoadProvider } from "./loading";

import { LOG_IN, LOG_OUT } from "./auth";
import { ADD_POST, ADD_POSTS } from "./post";
import { LOAD, OFFLOAD, CLOSE, OPEN, MENU } from "./loading";

/*** All context exports */
export {
   usePostsContext,
   useAuthContext,
   useLoadContext ,
   AuthProvider,
   LoadProvider,
   PostProvider,
   LOG_IN,
   LOG_OUT,
   ADD_POST,
   ADD_POSTS,
   LOAD,
   OFFLOAD,
   CLOSE,
   OPEN,
   MENU
};