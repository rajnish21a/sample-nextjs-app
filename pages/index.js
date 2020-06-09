import React, { Component} from "react";
import Link from "next/link";
import Router from "next/router";
import User from "../components/User/User"


class MainIndex extends Component{
  static getInitialProps(context){
    console.log(context);
    const promise = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve({appName:'SuperApp'})
      },1000);
    })
    return promise;
  }
  render(){
    return (
      <div>
      <h1>The Main index page {this.props.appName}</h1>
      <Link href="/Auth"><a>Auth</a></Link>
      <button onClick={()=>{
        Router.push("/Auth")
      }}>Go to Auth</button>
      <User name="Rajnish" age="37"/>
      <style jsx>{`
        div {
          border:1px solid #eee;
          box-shadow: 0 2px 3px #ccc;
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </div>
    )
  }
}



export default MainIndex;