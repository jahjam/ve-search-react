import React from 'react';

import usePagination, { DOTS } from '../../hooks/use-pagination';

import {
  PaginationContainer,
  Page,
} from '../../styled/styledComps/styledTemps/styledPagination';

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
