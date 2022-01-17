import React, {useState} from "react";
import styled from "styled-components";

const WrapSearchBar = styled.div`
  width: 100%;
  max-width: 490px;
  margin: auto;
`;

const ContainerSearchBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  & > #searchQueryInput {
    width: 100%;
    height: 35px;
    background: #f5f5f5;
    outline: none;
    border: none;
    border-radius: 1.625rem;
    padding: 0 3.5rem 0 1.5rem;
    font-size: 1rem;
  }
  & > #searchQuerySubmit {
    width: 3.5rem;
    height: 2.8rem;
    margin-left: -3.5rem;
    background: none;
    border: none;
    outline: none;
  }
  & > #searchQuerySubmit:hover {
    cursor: pointer;
  }
`;

const SearchBar = ({handleSearchPagination, setSearchValuePagination}) => {

  const [searchValue, setSearchValue] = useState("")

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
    setSearchValuePagination(e.target.value);
  }

  const handleGetSearch = () => {
    handleSearchPagination(1,searchValue);
  }

  const handleGetSearchEnter = (e) => {
    if(e.key === 'Enter'){
      handleSearchPagination(1,searchValue);
    }
  }

  return (
    <WrapSearchBar>
      <ContainerSearchBar>
        <input
          id="searchQueryInput"
          type="text"
          name="searchQueryInput"
          placeholder="¿Qué estás buscando?"
          value={searchValue}
          onChange={handleSearchValue}
          onKeyPress={handleGetSearchEnter}
        />
        <button
          id="searchQuerySubmit"
          name="searchQuerySubmit"
          onClick={handleGetSearch}
        >
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
            <path
              fill="#666666"
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            />
          </svg>
        </button>
      </ContainerSearchBar>
    </WrapSearchBar>
  );
};

export default SearchBar;
