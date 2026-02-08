"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="p-6">
      <h2>Something went wrong.</h2>
      <button className="underline" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
