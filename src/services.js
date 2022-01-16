import axios from "axios";

const searchProducts = async (page=1,text='') => {
  const result = await axios.get(
    `http://localhost:3000/products?text=${text}&page=${page}`
  )
  return result;
};

export {searchProducts}