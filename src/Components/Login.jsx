import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import React, {useState,useEffect} from "react";

import { auth } from "../firebase";
import { signInWithGoogle } from "firebase/auth";

// import {auth,provider} from "../firebase";
// import { signInWithPopup } from "firebase/auth";

import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [value,setValue] = useState('')

  // const [user, setUser] = useState(null);

  // const handleGoogleLogin = () => {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   firebase.auth().signInWithPopup(provider)
  //     .then(result => {
  //       const user = result.user;
  //       setUser(user);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  // const handleClick = () => {
  //   signInWithPopup(auth,provider).then((data)=>{
  //     setValue(data.user.email)
  //     localStorage.setItem("email",data.user.email)
  //   })
  // }
  // useEffect(()=>{
  //   setValue(localStorage.getItem('email'))
  // })

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const demoLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, "john@gmail.com", "test1234")
      .then((auth) => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="my-11">
      <div className="bg-gradient-to-br from-violet-200 to-gray-100 w-2/3 mx-auto flex flex-col pt-20 pb-10 px-11 rounded-3xl max-w-lg">
        <h2 className="font-bold text-2xl mb-2">Hey, hello 👋</h2>
        <p className="text-gray-600 text-sm mb-5">
          Enter the information you entered while registering.
        </p>
        <form className="flex flex-col">
          <label htmlFor="email" className="mb-1">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            className="outline-none bg-transparent border border-indigo-500 rounded-md p-1 focus:shadow-md mb-4"
          />
          <label htmlFor="password" className="mb-1">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            className="outline-none bg-transparent border border-indigo-500 rounded-md p-1 focus:shadow-md mb-4"
          />
          <p className="text-right text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 cursor-not-allowed">
            Forgot Password?
          </p>
          <button
            type="submit"
            onClick={signIn}
            className="bg-gradient-to-r from-purple-400 to-indigo-600 text-white my-3 py-2 rounded-lg"
          >
            Sign In
          </button>
        </form>
        <div className="flex items-center justify-center">
          <div className="border-b border-gray-400 w-full h-1"></div>
          <p className="mx-3 text-gray-600">or</p>
          <div className="border-b border-gray-400 w-full h-1"></div>
        </div>
        <button
          className="bg-gradient-to-r from-purple-400 to-indigo-600 text-white my-3 py-2 rounded-lg"
          onClick={() => navigate("/signup")}
        >
          Register
        </button>
        <button
          className="bg-gradient-to-r from-purple-400 to-indigo-600 text-white my-3 py-2 rounded-lg"
          onClick={demoLogin}
        >
          Demo Login
        </button>
      </div>
    </div>
  );
}

export default Login;
