interface PaginationProps {
  total: number;
  limit: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({
  total,
  limit,
  page,
  setPage,
}: PaginationProps) {
  const pagesCount = Math.ceil(total / limit);

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
        disabled={page === pagesCount}
      >
        &gt;
      </button>
      <button
        type="button"
        onClick={() => setPage(pagesCount)}
        disabled={page === pagesCount}
      >
        &gt;&gt;
      </button>
      <span>
        {`Page ${page} of ${pagesCount}`}
      </span>
    </nav>
  );
}
