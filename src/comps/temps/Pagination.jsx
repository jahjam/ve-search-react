import React from 'react';
import styled from 'styled-components';
import usePagination, { DOTS } from '../../hooks/use-pagination';

const PaginationContainer = styled.div`
  display: flex;
  list-style-type: none;
`;

const Page = styled.li`
  padding: 0 1.2rem;
  height: 3.2rem;
  text-align: center;
  margin: auto 0.4rem;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 1.6rem;
  line-height: 1.5;
  font-size: 1.3rem;
  min-width: 3.2rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }

  background-color: ${props => {
    console.log(props);
    if (props.curPage === props.pageNum) return '#00000014';
  }};

  background-color: ${props => {
    if (props.DOTS) return 'transparent';
  }};
`;

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 pages in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <PaginationContainer>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return (
            <Page DOTS={DOTS} key={Math.random()}>
              &#8230;
            </Page>
          );
        }

        return (
          <Page
            pageNum={pageNumber}
            curPage={currentPage}
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </Page>
        );
      })}
    </PaginationContainer>
  );
};

export default Pagination;
