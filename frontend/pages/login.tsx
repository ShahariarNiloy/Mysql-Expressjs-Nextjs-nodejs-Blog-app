import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const router = useRouter();

  //   const { login } = useContext(AuthContext);

  const handleChange = (e: any) => {
    setInputs((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // try {
    //   await login(inputs)
    //   navigate("/");
    // } catch (err) {
    //   setError(err.response.data);
    // }
  };
  return (
    <div className="auth">
      <h1>Login</h1>
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
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account? <Link href={"/register"}>Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
