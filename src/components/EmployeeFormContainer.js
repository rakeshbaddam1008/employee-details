import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import useForm from "../hooks/useForm";
import { submitEmployeeData } from "../services/employeeService";

const EmployeeFormContainer = () => {
  const [formData, handleChange, resetForm] = useForm({ name: "", id: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      await submitEmployeeData(formData);
      setStatus("succeeded");
      resetForm();
    } catch (error) {
      setStatus("failed");
      setError(error.message);
    }
  };

  return (
    <EmployeeForm
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      status={status}
      error={error}
    />
  );
};

export default EmployeeFormContainer;
