import React, { useState } from 'react';
import './SignUpForm.css';
import { useNavigate } from 'react-router-dom';

const dataInitialState = {
  name: "",
  username: "",
  email: "",
  mobile: "",
  checkbox: false,
};

const errorsInitialState = {
  name: "",
  username: "",
  email: "",
  mobile: "",
  checkbox: false,
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(dataInitialState);
  const [errors, setErrors] = useState(errorsInitialState);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let err = {};
    
    if (!data.name || data.name.trim() === "")
      err.name = "Name is required";
    if (!data.username || data.username.trim() === "")
      err.username = "Username is required";
    if (!data.email || data.email.trim() === "")
      err.email = "Email is required";
    if (!data.mobile || data.mobile.trim() === "")
      err.mobile = "Mobile is required";
    if (!data.checkbox)
      err.checkbox = "Checkbox is required";

    setErrors(err);

    if (Object.keys(err).length > 0) {
      return;
    } else {
      alert("Registered Successfully!!!");
      localStorage.setItem("user", JSON.stringify(data));
      setData(dataInitialState);
      navigate("/homepage");  // If you're using React Router for navigation
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />
        <span>{errors.name}</span>

        <input
          type="text"
          name="username"
          placeholder="UserName"
          value={data.username}
          onChange={handleChange}
        />
        <span>{errors.username}</span>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />
        <span>{errors.email}</span>

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile"
          value={data.mobile}
          onChange={handleChange}
        />
        <span>{errors.mobile}</span>

        <div className="checkbox">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={data.checkbox}
            onChange={handleChange}
          />
          <label htmlFor="checkbox">Share my registration data with SuperApp</label>
          
          <span>{errors.checkbox}</span>
        </div>

        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
};

export default SignUpForm;
