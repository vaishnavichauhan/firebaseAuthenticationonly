import React, { useState,useEffect } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    deleteUser
  } from "firebase/auth";
  import { auth } from "./firebase";
import { async } from '@firebase/util';

function Home() {
   const[createmail,setCemail]= useState("");
   const[createpassword,setCpassword]= useState("");
   const[username,setusersname]=useState("");
   const[logo,setlogo]=useState("")

   
    const creatUser=async (e)=>{
        e.preventDefault();
     try{
        const user = await createUserWithEmailAndPassword(
            auth,
            createmail,
            createpassword
        );
        console.log("user",user);
     }catch(error){
        console.log(error.message);
     }
    };

    const loginUser= async(e)=>{

        try{
            const user = await signInWithEmailAndPassword(
                auth,
                createmail,
                createpassword
            );
            // setusersname(user.user.email);
            setlogo(user)
            console.log("users:- ",user);
         }catch(error){
            console.log("e",error.message);
         }
        };


        useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
              console.log("ue",currentuser);
              if(currentuser){
                console.log("yes",currentuser.email);
                 setusersname(currentuser.email)
              }else{
                console.log("no",currentuser);
                 setusersname(null)
              }
          }
          )
          return unsubscribe
        }, [])
  const logout = () => {
    console.log(auth);
    signOut(auth)
  };

  


 const signin = ()=>{
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
 };
       
  return (
    <div>
<h1>Sing Up</h1>
<form>
    <label>Email:</label>
    <input type="text"  onChange={(e)=>{setCemail(e.target.value)}}/>
    <label>password:</label>
    <input type="text"  onChange={(e)=>{setCpassword(e.target.value)}}/>
    <input type="submit" value="create user" onClick={creatUser} />
    </form>
    <br/>

   <h1>Login</h1> 
   <form>
    <label>Email:</label>
    <input type="text"  onChange={(e)=>{setCemail(e.target.value)}}/>
    <label>password:</label>
    <input type="text"  onChange={(e)=>{setCpassword(e.target.value)}}/>
    <input type="button" value="Login user" onClick={loginUser} />
    </form> 
    <br/>
  
      <button onClick={logout}> Sign Out ..</button>
    <h1>{username}</h1>
      <button onClick={signin}> Sign in with google </button>

    </div>
  )
}

export default Home