import React from "react";

const EmployeeForm = ({
  formData,
  handleChange,
  handleSubmit,
  status,
  error,
}) => {
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-container"> 
        <div className="emp-container">
          <label className="label">
            Employee Name:
          </label>
          <input
            type="text"
            name="name"
            className="input"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="emp-container">
          <label className="label">
            Employee ID:
          </label>
          <input
            type="text"
            name="id"
            className="input"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button className="submit-btn" type="submit" disabled={status === "loading"}>
        Submit
      </button>
      {status === "loading" && <p>Submitting...</p>}
      {status === "succeeded" && <p>Submitting...</p>}
      {status === "failed" && <p>Error: {error}</p>}
    </form>
  );
};

export default EmployeeForm;
