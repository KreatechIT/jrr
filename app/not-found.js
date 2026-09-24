import Link from "next/link";

export const metadata = {
  title: "Page Not Found | JR Recycling Solutions BD",
  description:
    "The page you're looking for doesn't exist or has been moved. Return to JR Recycling Solutions to explore our e-waste recycling services in Bangladesh.",
};

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-[10%] px-[5%]">
      <h1 className="text-[48px] font-bold text-black/80">404</h1>
      <p className="text-[20px] text-black/70 mt-2">
        Sorry, the page you&apos;re looking for could not be found.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-md bg-green-700 text-white px-6 py-3 font-medium hover:bg-green-800"
      >
        Back to Home
      </Link>
    </section>
  );
}
