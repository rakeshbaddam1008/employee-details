import axios from "axios";

const API_URL = "https://api.example.com/employees";

export const submitEmployeeData = async (employeeData) => {
  try {
    const response = await axios.post(API_URL, employeeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
