import React from "react";
import styled from "styled-components";

const WrapError = styled.div`
  width: 100%;
  font-size: 20px
`;

const ErrorSearch = ({error}) => {
  return (
    <WrapError>
        <p>{error}</p>
    </WrapError>
  );
};

export default ErrorSearch;