import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then((resp) => resp.data);
};

const createPerson = (person) => {
  const req = axios.post(baseUrl, person);
  return req.then((resp) => resp.data);
};

const updatePerson = (id, person) => {
  const req = axios.put(`${baseUrl}/${id}`, person);
  return req.then((resp) => resp.data);
};

const deletePerson = (id) => {
  const req = axios.delete(`${baseUrl}/${id}`);
  return req.then((resp) => { resp.data });
};

export default { getAll, createPerson, updatePerson, deletePerson };
