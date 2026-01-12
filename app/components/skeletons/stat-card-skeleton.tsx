export function StatCardSkeleton() {
  return (
    <div className="min-w-60 flex-1 space-y-4 rounded-2xl bg-gray-100 px-4 py-4 md:py-8">
      <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
      <div className="h-8 w-32 animate-pulse rounded bg-gray-200" />
    </div>
  );
}

export default function StatCardsSkeletonGroup() {
  return (
    <article className="flex flex-wrap items-center justify-between gap-4">
      <StatCardSkeleton />
      <StatCardSkeleton />
      <StatCardSkeleton />
    </article>
  );
}
