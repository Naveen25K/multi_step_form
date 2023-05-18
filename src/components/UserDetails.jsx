import React, { useState } from "react";

const UserDetails = ({ form, nextBtn, prevBtn, handleChange }) => {
  const [disabled, setDisable] = useState(false);
  return (
    <>
      <h1>User Personal Details</h1>

      <input
        type="text"
        name="fname"
        value={form.fname}
        id="fname"
        placeholder="First Name"
        onChange={handleChange}
        disabled={disabled}
        required
      />
      <br></br>
      <input
        type="text"
        name="lname"
        value={form.lname}
        id="lname"
        placeholder="Last Name"
        onChange={handleChange}
        disabled={disabled}
        required
      />
      <br></br>
      <input
        type="area"
        name="address"
        value={form.address}
        id="address"
        placeholder="Address"
        onChange={handleChange}
        disabled={disabled}
        required
      />
      <br></br>
      <br></br>
      <button className="btn success" onClick={() => nextBtn()}>
        Save and Next
      </button>
      <button className="btn primary" onClick={() => prevBtn()}>
        Back
      </button>
      <button className="btn primary" onClick={() => setDisable(!disabled)}>
        Save
      </button>
    </>
  );
};

export default UserDetails;
