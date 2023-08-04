import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Sheared/Loading";
import Jobpost from "./Jobpost";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const AlljobPost = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const {
    data: allPosts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allPosts"],
    queryFn: async () => {
      const res = await fetch("https://remotely-project-server.vercel.app/alljob");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  // Start with 0 as the first page
  const productsPerPage = 6;
  const totalPages = Math.ceil(allPosts.length / productsPerPage);

  // Calculate the indexes of products to display on the current page
  const indexOfLastProduct = (currentPage + 1) * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allPosts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handler for changing the current page
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className=" mx-4 md:mx-20 lg:mx-40 mb-40">
      {currentProducts.map((job) => (
        <Jobpost key={job._id} job={job} refetch={refetch}></Jobpost>
      ))}

      <div className="mt-14">
      <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={totalPages}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          onPageChange={handlePageChange}
          containerClassName="pagination flex"
          activeClassName=" active text-white bg-sky-500"
          pageClassName="mx-2 px-3 py-1 text-white font-bold bg-rose-600 rounded"
          previousClassName="mx-2 px-3 py-1 text-white font-bold bg-rose-600 rounded"
          nextClassName="mx-2 px-3 py-1 text-white font-bold bg-rose-600 rounded"
        />
      </div>
    </div>
  );
};

export default AlljobPost;
