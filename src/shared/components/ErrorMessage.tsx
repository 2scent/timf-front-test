interface ErrorMessageProps {
  children: React.ReactNode;
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <span style={{ color: 'red' }}>{children}</span>
  );
}
