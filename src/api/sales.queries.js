import axios from "axios";

export const createSale = async (newSale) => {
  await axios.post("http://localhost:4000/sale", newSale);
};

export const getSales = async () => {
  const response = await axios.get(`http://localhost:4000/providers`);
  return response.data;
};
