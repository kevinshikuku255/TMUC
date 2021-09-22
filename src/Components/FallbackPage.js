import React from 'react';
import Head from "./Head";
import "./components.scss";


/** Fallback page */
function FallbackPage() {
  return (
    <>
      <Head/>
      <div className="FallbackPage">
        <h1>OOOPS !</h1>
        <h2>404 Page not found</h2>
      </div>
    </>
  )
}

export default FallbackPage
