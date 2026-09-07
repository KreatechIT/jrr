"use client";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";

function BlogPagination({ count, page }) {
  const router = useRouter();

  const handlePageChange = (event, value) => {
    router.push(`/blog?page=${value}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Pagination count={count} page={page} onChange={handlePageChange} />
  );
}

export default BlogPagination;
