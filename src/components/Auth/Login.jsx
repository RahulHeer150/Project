import React, { useEffect, useState } from "react";

const Login = ({ HandleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log("email is", email);
    console.log("password is", password);
    HandleLogin(email,password)
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl ">
        <form
          onSubmit={(e) => {
            handlerSubmit(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            className=" text-xl text-gray-500 outline-none bg-transparent border-2 border-emerald-600  px-3 py-5 rounded-full placeholder:text-gray-400"
            placeholder="enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            placeholder="enter password"
            className=" mt-3 text-xl text-black outline-none bg-transparent border-2 border-emerald-600  px-3 py-5 rounded-full placeholder:text-gray-400"
          />
          <button
            onSubmit={handlerSubmit}
            className="  text-xl mt-5 text-white outline-none bg-emerald-600 border-2  px-4 py-5 rounded-full"
          >
            <b>Login</b>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
