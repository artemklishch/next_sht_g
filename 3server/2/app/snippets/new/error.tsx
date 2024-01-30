"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => {};
}
export default function ErrorPage({ error }: ErrorPageProps) {
  return <div>{error.message}</div>;
}
