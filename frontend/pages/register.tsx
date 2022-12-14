import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const router = useRouter();

  const handleChange = (e:any) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if(!inputs.email || !inputs.password || !inputs.email){
      setError("Please Fill Out Every Field !!")
      return
    }
    try {
      const data = await axios.post("api/auth/register", inputs);
      if(data.status === 200){
        router.push("/login");
      }
    } catch (err) {
      
      setError(err?.response?.data);
    }
  };


  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          Do you have an account? <Link href={"/login"}>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
