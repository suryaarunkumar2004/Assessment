import { PaginationWrapper, PageButton, PageInfo } from "./Pagination.styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getVisiblePages = (): number[] => {
    const pages: number[] = [];
    const delta = 2;
    const start = Math.max(1, currentPage - delta);
    const end = Math.min(totalPages, currentPage + delta);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <PaginationWrapper>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        $variant="arrow"
      >
        ←
      </PageButton>

      {getVisiblePages()[0] > 1 && (
        <>
          <PageButton onClick={() => onPageChange(1)} $active={false} $variant="page">
            1
          </PageButton>
          {getVisiblePages()[0] > 2 && <PageInfo>···</PageInfo>}
        </>
      )}

      {getVisiblePages().map((page) => (
        <PageButton
          key={page}
          onClick={() => onPageChange(page)}
          $active={page === currentPage}
          $variant="page"
        >
          {page}
        </PageButton>
      ))}

      {getVisiblePages()[getVisiblePages().length - 1] < totalPages && (
        <>
          {getVisiblePages()[getVisiblePages().length - 1] < totalPages - 1 && (
            <PageInfo>···</PageInfo>
          )}
          <PageButton
            onClick={() => onPageChange(totalPages)}
            $active={false}
            $variant="page"
          >
            {totalPages}
          </PageButton>
        </>
      )}

      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        $variant="arrow"
      >
        →
      </PageButton>
    </PaginationWrapper>
  );
}

export default Pagination;
