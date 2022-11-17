import axios from "axios";

export const createSale = async (newSale) => {
  await axios.post("http://localhost:4000/sale", newSale);
};

export const getSales = async () => {
  const response = await axios.get(`http://localhost:4000/sales`);
  return response.data;
};

export const getSale = async (id) => {
  const response = await axios.get(`http://localhost:4000/sale/${id}`);
  return response.data;
};

export const getSaleByEmployee = async (id) => {
  const response = await axios.get(
    `http://localhost:4000/sale/byemployee/${id}`
  );
  return response.data;
};
