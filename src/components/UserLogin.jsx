import React, { useState } from "react";

const UserLogin = ({ form, nextBtn, handleChange }) => {
  const [disabled, setDisable] = useState(false);

  return (
    <>
      <h1>User Login Details</h1>
      <input
        type="email"
        name="email"
        value={form.email}
        id="email"
        placeholder="Email Id"
        onChange={handleChange}
        disabled={disabled}
        required
      />
      <br></br>
      <br></br>
      <input
        type="text"
        name="password"
        value={form.password}
        disabled={disabled}
        id="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <br></br>
      <br></br>

      <button className="btn primary" onClick={() => nextBtn()}>
        Save and Next
      </button>
      <button className="btn primary" onClick={() => setDisable(!disabled)}>
        Save
      </button>
    </>
  );
};

export default UserLogin;
