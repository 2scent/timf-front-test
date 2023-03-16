import { useState } from 'react';

interface UseChecksReturn<T> {
  checks: Set<T>;
  setChecks: React.Dispatch<React.SetStateAction<Set<T>>>;
  toggleCheck: (item: T, checked: boolean) => void;
}

export default function useChecks<T>(): UseChecksReturn<T> {
  const [checks, setChecks] = useState(new Set<T>());

  const toggleCheck = (item: T, checked: boolean) => {
    const newChecks = new Set(checks);

    if (checked) {
      newChecks.add(item);
      setChecks(newChecks);
    } else {
      newChecks.delete(item);
      setChecks(newChecks);
    }
  };

  return {
    checks,
    setChecks,
    toggleCheck,
  };
}
