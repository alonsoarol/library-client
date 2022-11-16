import axios from "axios";

export const getCustomers = async () => {
  const response = await axios.get(`http://localhost:4000/customers`);
  return response.data;
};
