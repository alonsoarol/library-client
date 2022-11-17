import axios from "axios";

export const postSignUp = async (newAccount) => {
  await axios.post("http://localhost:4000/signup", newAccount);
};

export const postSignIn = async (userData) => {
  const response = await axios.post("http://localhost:4000/signin", userData);
  return response.data;
};

export const getSignin = (token) => {
  return axios.get("http://localhost:4000/signin", {
    headers: { Authorization: "Bearer " + token },
  });
};

export const getAccounts = async () => {
  const response = await axios.get("http://localhost:4000/accounts");
  return response.data;
};

export const deleteAccount = async (id) => {
  const response = await axios.delete(`http://localhost:4000/account/${id}`);
  return response.data;
};

export const putPermission = async (id, data) => {
  console.log(data);
  console.log(id);
  await axios.put(`http://localhost:4000/account/permissions/${id}`, data);
};
