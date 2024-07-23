import axios from "axios";

const BASEAPI_URL = "https://api.example.com";
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

export const submitEmployeeData = async (employeeData) => {
  try {
    const response = await axios.post(`${BASEAPI_URL}/employees`, employeeData);
    //check respone log
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
