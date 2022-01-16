import React from "react";
import styled from "styled-components";

const WrapPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px auto;
  & > .prev {
    background: #fff;
    border: none;
    padding: 10px;
    color: blue;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    margin: 0 10px;
    cursor: pointer;
  }
  & > .next {
    background: #fff;
    border: none;
    padding: 10px;
    color: blue;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    margin: 0 10px;
    cursor: pointer;
  }
  & > .prev.disabled {
    pointer-events: none;
    box-shadow: none;
    color: #999;
  }
  & > .next.disabled {
    pointer-events: none;
    box-shadow: none;
    color: #999;
  }
  & > .paginationItem {
    background: #fff;
    border: 2px solid #666;
    padding: 10px 15px;
    border-radius: 50%;
    height: 45px;
    width: 45px;
    position: relative;
    margin: 0 5px;
    cursor: pointer;
  }

  & > .paginationItem span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & > .paginationItem.active {
    border: 1px solid #0071CE;
    color: #0071CE;
    pointer-events: none;
  }
`;

const Pagination = ({
  pagination,
  handleSearchPagination,
  searchValuePagination,
}) => {
  function goToNextPage() {
    const pageNumber = pagination.page + 1;
    handleSearchPagination(pageNumber, searchValuePagination);
  }

  function goToPreviousPage() {
    const pageNumber = pagination.page - 1;
    handleSearchPagination(pageNumber, searchValuePagination);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    handleSearchPagination(pageNumber, searchValuePagination);
  }

  const getPaginationGroup = () => {
    const defaultPages = 5;
    const numberOfPages =
      defaultPages > pagination.totalPages
        ? pagination.totalPages
        : defaultPages;
    let start =
      Math.floor((pagination.page - 1) / numberOfPages) * numberOfPages;
    return new Array(numberOfPages).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <>
      <WrapPagination>
        <button
          onClick={goToPreviousPage}
          className={`prev ${pagination.page === 1 ? "disabled" : ""}`}
        >
          Anterior
        </button>

        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              pagination.page === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        <button
          onClick={goToNextPage}
          className={`next ${
            pagination.page === pagination.totalPages ? "disabled" : ""
          }`}
        >
          Siguiente
        </button>
      </WrapPagination>
    </>
  );
};

export default Pagination;
