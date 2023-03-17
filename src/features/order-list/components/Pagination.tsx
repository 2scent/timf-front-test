import styled from '@emotion/styled';

import Box from '@mui/material/Box';

interface PaginationProps {
  totalPagesCount: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({
  totalPagesCount,
  page,
  setPage,
}: PaginationProps) {
  return (
    <Box
      component="nav"
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        display: 'flex',
        pt: 2,
        textAlign: 'center',
      }}
    >
      <div>
        <SetPageButton
          type="button"
          onClick={() => setPage(1)}
          disabled={page === 1}
        >
          ‹‹
        </SetPageButton>
        <SetPageButton
          type="button"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          ‹
        </SetPageButton>
        <PageButton
          type="button"
          disabled
        >
          {page}
        </PageButton>
        <SetPageButton
          type="button"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPagesCount}
        >
          ›
        </SetPageButton>
        <SetPageButton
          type="button"
          onClick={() => setPage(totalPagesCount)}
          disabled={page === totalPagesCount}
        >
          ››
        </SetPageButton>
      </div>
      <strong>
        {`Page ${page} of ${totalPagesCount}`}
      </strong>
    </Box>
  );
}

const PageButton = styled.button`
  border: 1px solid #2c3e76;
  padding: 0.5rem;

  background-color: #2c3e76;

  color: white;
`;

const SetPageButton = styled.button`
  border: 1px solid #dee2e6;
  padding: 0.5rem;

  background-color: white;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;
