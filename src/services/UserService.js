import httpClient from "../axios/http-common";

const getUsersList = () => {
  return httpClient.get("/api/users");
};

const createUser = (user) => {
  return httpClient.post("/api/users", user);
};

const getUser = (id) => {
  return httpClient.get(`/api/users/${id}`);
};

const updateUser = (id, user) => {
  return httpClient.put(`/api/users/${id}`, user);
};

const deleteUser = (id) => {
  return httpClient.delete(`/api/users/${id}`);
};

export default { getUsersList, createUser, getUser, updateUser, deleteUser };
