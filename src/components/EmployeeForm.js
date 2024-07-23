import React from "react";

const EmployeeForm = ({
  formData,
  handleChange,
  handleSubmit,
  status,
  error,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Employee Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Employee ID:
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit" disabled={status === "loading"}>
        Submit
      </button>
      {status === "loading" && <p>Submitting...</p>}
      {status === "failed" && <p>Error: {error}</p>}
    </form>
  );
};

export default EmployeeForm;
