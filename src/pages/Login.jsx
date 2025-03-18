import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Login() {
  const [form, setForm] = useState({ username: "", phone: "" });
  const navigate = useNavigate();

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const authUserHandler = async (e) => {
    e.preventDefault();
    if (!form.phone && !form.username) return false;
    const res = await fetch(`http://localhost:4003/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.status === 200 || res.status === 201) {
      toast.success(
        `User ${res.status === 200 ? "login" : "register"} successfully :)`
      );

      navigate("/");
    }
  };
  return (
    <form className="box" action="" method="POST" target="_self">
      <h1>login</h1>
      <input
        type="text"
        name="username"
        id="username"
        value={form.username}
        onChange={(e) => inputChangeHandler(e)}
        placeholder="Username"
        autoComplete="off"
      />
      <input
        type="text"
        name="phone"
        value={form.phone}
        onChange={(e) => inputChangeHandler(e)}
        id="phone"
        placeholder="Phone"
        autoComplete="off"
      />
      <button onClick={authUserHandler} type="button">
        Register / Login
      </button>
    </form>
  );
}

export default Login;
