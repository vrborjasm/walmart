import React, { useEffect, useState } from "react";
import NavBar from "../../components/common/NavBar";
import { searchProducts } from "../../services";
import ProductsList from "../../components/ProductsList";
import Pagination from '../../components/common/Pagination'
import ErrorSearch from "../../components/ErrorSearch";

const Index = () => {
  const [products, setProduct] = useState([]);
  const [pagination, setPagination] = useState({});
  const [searchValuePagination, setSearchValuePagination] = useState(null)
  const [error, setError] = useState("");

  useEffect(() => {
    searchProducts()
      .then((resp) => {
        setProduct(resp.data.docs);
        setPagination({
          totalPages: resp.data.totalPages,
          limit: resp.data.limit,
          page: resp.data.page,
          prevPage: resp.dataprevPage || null,
          nextPage: resp.data.nextPage || null
        })
      })
      .catch((err) => console.log(err));
  },[]);

  const handleSearchPagination = (page,text="") => {
    setError(null);
    searchProducts(page,text).then((resp) => {
      setProduct(resp.data.docs);
      if(resp.data.docs.length === 0){
        setError("Lo sentimos, no encontramos resultados");
      }
      setPagination({
        totalPages: resp.data.totalPages,
        limit: resp.data.limit,
        page: resp.data.page,
        prevPage: resp.dataprevPage || null,
        nextPage: resp.data.nextPage || null
      })
    })
    .catch((err) => console.log(err));
  }

  return (
    <>
      <NavBar handleSearchPagination={handleSearchPagination} setSearchValuePagination={setSearchValuePagination}/>
      {error ? (
        <ErrorSearch error={error}/>
      ) : (
        <>
      <ProductsList products={products}/>
      <Pagination pagination={pagination} handleSearchPagination={handleSearchPagination} searchValuePagination={searchValuePagination}/>
      </>
      )}
      
    </>
  );
};

export default Index;
