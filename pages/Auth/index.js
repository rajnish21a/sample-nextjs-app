import React from "react";

const Auth = (props)=>(
<div><h1>The Auth index page {props.appName}</h1></div>
)

Auth.getInitialProps = (context)=>{
  console.log(context);
  const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve({appName:'AuthSuperApp'})
    },1000);
  })
  return promise;
}


export default Auth;