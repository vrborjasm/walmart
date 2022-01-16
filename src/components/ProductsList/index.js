import React from "react";
import ProductCard from "../ProductCard";
import styled from "styled-components";

const ContainerList = styled.div`
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ProductsList = () => {
  const products = [
    {
      _id: "61e34b52cbc38c3a3595f429",
      id: 1,
      brand: "ooy eqrceli",
      description: "rlñlw brhrka",
      image: "www.lider.cl/catalogo/images/whiteLineIcon.svg",
      price: 498724,
      finalPrice: 200000,
    },
    {
      _id: "61e34b52cbc38c3a3595f42b",
      id: 2,
      brand: "dsaasd",
      description: "zlrwax bñyrh",
      image: "www.lider.cl/catalogo/images/babyIcon.svg",
      price: 130173,
    },
    {
      _id: "61e34b52cbc38c3a3595f42d",
      id: 3,
      brand: "weñxoab",
      description: "hqhoy qacirk",
      image: "www.lider.cl/catalogo/images/homeIcon.svg",
      price: 171740,
    },
    {
        _id: "61e34b52cbc38c3a3595f42d",
        id: 3,
        brand: "weñxoab",
        description: "hqhoy qacirk",
        image: "www.lider.cl/catalogo/images/homeIcon.svg",
        price: 171740,
      },
  ];

  return (
    <ContainerList>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ContainerList>
  );
};

export default ProductsList;
