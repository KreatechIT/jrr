function Loading() {
  return (
    <div className="flex flex-col bg-white">
      <div className="bg-[#1D7773] relative overflow-hidden flex-col w-full h-[540px] flex justify-center items-center">
        <div className="h-12 mobile:w-[80%] laptop:w-[55%] rounded bg-white/20 animate-pulse" />
        <div className="mt-[30px] h-7 w-[220px] rounded bg-white/20 animate-pulse" />
      </div>
      <section className="py-[5%] flex mobile:flex-col laptop:flex-row justify-between px-[5%]">
        <div className="mr-[1%] mobile:w-full laptop:w-[70%]">
          <div className="rounded-xl mobile:w-full laptop:w-[80%] h-[400px] bg-gray-200 animate-pulse" />
          <div className="mt-[30px] space-y-4">
            <div className="h-5 w-full rounded bg-gray-200 animate-pulse" />
            <div className="h-5 w-11/12 rounded bg-gray-200 animate-pulse" />
            <div className="h-5 w-10/12 rounded bg-gray-200 animate-pulse" />
            <div className="h-5 w-3/4 rounded bg-gray-200 animate-pulse" />
          </div>
        </div>
        <div className="mobile:w-full mobile:mt-10 laptop:mt-0 laptop:w-[30%]">
          <div className="h-10 w-64 rounded bg-gray-200 animate-pulse" />
          <div className="mt-5 space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-28 rounded-2xl bg-gray-200 animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Loading;
