import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then((resp) => resp.data);
};

const create = (person) => {
  const req = axios.post(baseUrl, person);
  return req.then((resp) => resp.data);
};

const update = (id, person) => {
  const req = axios.put(`${baseUrl}/${id}`, person);
  return req.then((resp) => resp.data);
};

export default { getAll, create, update };
