import axios from "axios";

export const createProvider = async (newProvider) => {
  await axios.post("http://localhost:4000/provider", newProvider);
};

export const getProviders = async () => {
  const response = await axios.get(`http://localhost:4000/providers`);
  return response.data;
};

export const deleteProviders = async (id) => {
  const response = await axios.delete(`http://localhost:4000/provider/${id}`);
  return response.data;
};
