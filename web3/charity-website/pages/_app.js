// pages/_app.js
import '../public/styles/global.css';
import React from 'react';
function MyApp({ Component, pageProps }) {
  // Any additional logic goes here
  
  return <Component {...pageProps} />;
}

export default MyApp;
