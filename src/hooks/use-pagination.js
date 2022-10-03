import { useMemo } from 'react';

export const DOTS = '...';

const range = (start, end) => {
  let length = end - start + 1;

  return Array.from({ length }, (_, i) => i + start);
};

const usePagination = ({
  totalCount,
  pageSize,
  //sibling count is number of pages shown between DOTS: 1 ... 14, 15, 16 ... 100
  siblingCount = 1,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // Minimum number of pages displayed is determined by siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const minimumPageNumbers = siblingCount + 5;

    // If the number of pages of data is less than or equal to the minumum page numbers we want to show:
    if (minimumPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    // To decide when the DOTS are shown we calculate left and right sibling position to make sure they are within a specific range. Anytime page is 3 or greater, left DOTS show, anytime page is 4 less than max page count, right DOTS are shown.
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    // Sibling indexes are one less than the page number, so 2 equals page 3 etc.
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    // Condition if no left dots to show, but rights dots to be shown
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    // Condition if no right dots to show, but left dots to be shown
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    // Condition if both left and right dots to be shown
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};

export default usePagination;
