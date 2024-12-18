import React from "react";
import { Link } from "react-router-dom";

function LoginRegisterButtons(){

  return (
    <div className="flex gap-4 items-center">
      <Link
        to="/login"
        className="bg-green-800 text-white rounded px-4 py-2 hover:bg-green-600 transition flex-wrap"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-500 transition"
      >
        Register
      </Link>
    </div>
  );
}

export default LoginRegisterButtons;


