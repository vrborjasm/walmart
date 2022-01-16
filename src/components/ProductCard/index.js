import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  box-shadow: 0 2px 7px #dfdfdf;
  background: #fafafa;
  border-radius: 16px;
  margin: 20px 0px;
`;

const CardTumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  & > img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const CardDetails = styled.div`
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 50px;
  justify-content: space-evenly;
  border-top: 1px solid #eee;
  & > span {
    font-size: 12px;
    font-weight: 700;
  }
  & > h4 {
    font-weight: 500;
    margin: 0;
  }
`;

const CardBottom = styled.div`
  border-top: 1px solid #eee;
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CardPrice = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 48px;
  color: #565656;
  font-weight: 600;
  & > h4 {
    margin: 0;
  }
  & > small {
    font-size: 80%;
    font-weight: 400;
    text-decoration: line-through;
    display: inline-block;
    color: #6d6e71;
  }
`;

const ProductCard = ({product}) => {
  return (
    <Card>
      <CardTumb>
        <img src={`https://${product.image}`} alt={product.description} />
      </CardTumb>
      <CardDetails>
        <span>{product.brand}</span>
        <h4>{product.description}</h4>
      </CardDetails>
      <CardBottom>
        <CardPrice>
          <h4>${product.finalPrice ? product.finalPrice : product.price}</h4>
          {product.finalPrice ? <small>${product.price}</small> : null}
        </CardPrice>
      </CardBottom>
    </Card>
  );
};

export default ProductCard;
