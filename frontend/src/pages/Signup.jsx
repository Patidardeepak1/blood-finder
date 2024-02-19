import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {server} from './constant.js'

function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChnage = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(`${server}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
 

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-l"
          id="username"
          onChange={handleChnage}
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border p-3 rounded-l"
          onChange={handleChnage}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-l"
          onChange={handleChnage}
        />
         <input
          type="text"
          placeholder="your blood group"
          id="bloodgroup"
          className="border p-3 rounded-l"
          onChange={handleChnage}
        />
          <input
          type="text"
          placeholder="state"
          id="state"
          className="border p-3 rounded-l"
          onChange={handleChnage}
        />
           <input
          type="text"
          placeholder="city"
          id="city"
          className="border p-3 rounded-l"
          onChange={handleChnage}
        />
           <input
          type="text"
          placeholder="mobile no."
          id="mobile"
          className="border p-3 rounded-l"
          onChange={handleChnage}
        />

           
               
             
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg  uppercase  hover:opacity-95 disabled:opacity-80 "
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      
      </form>

      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
