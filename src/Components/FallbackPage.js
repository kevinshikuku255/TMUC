import React from 'react';
import Head from "./Head";
import "./components.scss";


/** Fallback page */
function FallbackPage() {
  return (
    <>
      <Head/>
      <div className="FallbackPage">
        <h2>TMUC STUDENT APP</h2>
      </div>
    </>
  )
}

export default FallbackPage;