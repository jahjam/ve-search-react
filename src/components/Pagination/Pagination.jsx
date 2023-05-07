import React from 'react';

import usePagination, { DOTS } from '../../hooks/use-pagination';

import * as Styled from './styles';

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
    <Styled.PaginationContainer>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return (
            <Styled.Page DOTS={DOTS} key={Math.random()}>
              &#8230;
            </Styled.Page>
          );
        }

        return (
          <Styled.Page
            pageNum={pageNumber}
            curPage={currentPage}
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </Styled.Page>
        );
      })}
    </Styled.PaginationContainer>
  );
};

export default Pagination;
