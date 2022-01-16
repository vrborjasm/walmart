import React from "react";
import styled from "styled-components";
import SearchBar from "../SearchBar";

const WrapNavbar = styled.div`
  width: 100%;
`;

const WrapInfo = styled.div`
  background: #041e42;
  height: 22.5px;
  display: flex;
`;

const WrapAction = styled.div`
  background: #0071ce;
  height: 58px;
  display: flex;
`;

const ContainerInfo = styled.div`
  background: #041e42;
  max-width: 1440px;
  width: 100%;
  height: 22.5px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SpanInfo = styled.span`
  color: #ffffff;
  font-size: 12px;
  & > a {
    text-decoration: none;
    color: #5d92f4;
  }
`;

const LinkContainer = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  & > span > a {
    color: #ffffff;
    padding-left: 16px;
    text-decoration: none;
  }
`;

const ContainerAction = styled.div`
  background: #0071ce;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  height: 58px;
  display: flex;
`;

const NavBar = () => {
  return (
    <WrapNavbar>
      <WrapInfo>
        <ContainerInfo>
          <SpanInfo>
            Servicio al cliente de Lider.cl:{" "}
            <a href="tel:6004009000">600 400 9000</a> | Horario: de lunes a
            viernes de 8:00 a 22:00 y sábado, domingo y festivos de 9:00 a 22:00
          </SpanInfo>
          <LinkContainer>
            <span>
              <a href="https://www.lider.cl/agenda/#JuntosNosCuidamos">
                agenda tu visita
              </a>
            </span>
            <span>
              <a href="https://www.lider.cl/tiendas">locales y horarios</a>
            </span>
          </LinkContainer>
        </ContainerInfo>
      </WrapInfo>
      <WrapAction>
        <ContainerAction>
          <SearchBar />
        </ContainerAction>
      </WrapAction>
    </WrapNavbar>
  );
};

export default NavBar;
