import React from "react";
import ProductCard from "../ProductCard";
import styled from "styled-components";

const ContainerList = styled.div`
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ProductsList = ({products}) => {
  
  return (
    <ContainerList>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ContainerList>
  );
};

export default ProductsList;
