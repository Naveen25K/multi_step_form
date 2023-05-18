import React, { useState } from "react";

const UserContact = ({ form, nextBtn, prevBtn, handleChange, submitForm }) => {
  const [disabled, setDisable] = useState(false);
  return (
    <>
      <h1>User Contacts Details</h1>

      <div className="container">
        <div className="flex">
          <label for="country_code">Select Country Code</label>
          <select
            name="country_code"
            id="country_code"
            value={form.country_code}
            onChange={handleChange}
            disabled={disabled}
          >
            <option>+91</option>
            <option>+1</option>
          </select>
        </div>
        <br></br>
        <input
          type="number"
          name="phone"
          value={form.phone}
          disabled={disabled}
          id="phone"
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <br></br>
        <div className="flex ">
          <label for="checkbox">accept Terms And Condition </label>
          <input
            type="checkbox"
            value={form.checked}
            name="checked"
            id="checked"
            onChange={handleChange}
            disabled={disabled}
            required
          />
        </div>
        <br></br>
        <br></br>
      </div>
      <button className="btn success" onClick={() => submitForm()}>
        Save all Details
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

export default UserContact;
