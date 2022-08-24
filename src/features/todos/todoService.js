import axios from "axios";

const API_URL = "https://fakestoreapi.com/";

const getTodos = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await axios.get(API_URL + "products?limit=2", config);

  console.log(res.data);

  return res.data;
};

const todoService = {
  getTodos,
};

export default todoService;
