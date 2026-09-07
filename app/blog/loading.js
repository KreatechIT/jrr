import Layout from "@/components/Layout";

const BlogCardSkeleton = () => (
  <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-xl">
    <div className="w-full aspect-[4/3] bg-gray-200 animate-pulse" />
    <div className="flex flex-col flex-grow px-6 py-6">
      <div className="h-4 w-1/3 rounded bg-gray-200 animate-pulse" />
      <div className="mt-4 h-6 w-4/5 rounded bg-gray-200 animate-pulse" />
      <div className="mt-2 h-6 w-3/5 rounded bg-gray-200 animate-pulse" />
      <div className="mt-4 space-y-2">
        <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
        <div className="h-4 w-11/12 rounded bg-gray-200 animate-pulse" />
        <div className="h-4 w-2/3 rounded bg-gray-200 animate-pulse" />
      </div>
      <div className="mt-5 h-10 w-[160px] rounded-md bg-gray-200 animate-pulse" />
      <div className="w-full h-[1px] bg-black/10 mt-6 mb-4" />
      <div className="h-4 w-1/2 rounded bg-gray-200 animate-pulse" />
    </div>
  </div>
);

function Loading() {
  return (
    <div className="flex flex-col place-content-center place-items-center">
      <Layout title="Blog" bg="/backgrounds/16.jpeg" />
      <section className="py-[5%] px-[5%] min-h-[500px] w-full max-w-[1400px]">
        <div className="mt-[60px] grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Loading;
