import { useCallback, useMemo, useState } from 'react';

interface UsePaginationProps {
  totalItemsCount?: number;
  defaultLimit?: number;
}

interface UsePaginationReturn {
  limit: number;
  page: number;
  offset: number;
  totalPagesCount: number;
  shownItemsCount: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  changeLimit: (newLimit: number) => void;
}

export default function usePagination({
  totalItemsCount = 0,
  defaultLimit = 20,
}: UsePaginationProps = {}): UsePaginationReturn {
  const [limit, setLimit] = useState(defaultLimit);
  const [page, setPage] = useState(1);
  const offset = useMemo(() => (page - 1) * limit, [page, limit]);
  const totalPagesCount = useMemo(
    () => Math.ceil(totalItemsCount / limit),
    [totalItemsCount, limit],
  );
  const shownItemsCount = useMemo(
    () => Math.min(offset + limit, totalItemsCount) - offset,
    [offset, limit, totalItemsCount],
  );

  const changeLimit = useCallback((newLimit: number) => {
    setLimit(newLimit);

    const pagesCount = Math.ceil(totalItemsCount / newLimit);

    if (page > pagesCount) setPage(pagesCount);
  }, [setLimit, totalItemsCount, page]);

  return {
    limit,
    page,
    offset,
    totalPagesCount,
    shownItemsCount,
    setPage,
    changeLimit,
  };
}
