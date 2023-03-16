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
    <nav>
      <button
        type="button"
        onClick={() => setPage(1)}
        disabled={page === 1}
      >
        &lt;&lt;
      </button>
      <button
        type="button"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        &lt;
      </button>
      <button
        type="button"
        disabled
      >
        {page}
      </button>
      <button
        type="button"
        onClick={() => setPage(page + 1)}
        disabled={page === totalPagesCount}
      >
        &gt;
      </button>
      <button
        type="button"
        onClick={() => setPage(totalPagesCount)}
        disabled={page === totalPagesCount}
      >
        &gt;&gt;
      </button>
      <span>
        {`Page ${page} of ${totalPagesCount}`}
      </span>
    </nav>
  );
}
