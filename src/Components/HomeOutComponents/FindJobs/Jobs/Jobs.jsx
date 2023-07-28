import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Job from "./Job";
import ReactPaginate from "react-paginate";

const Jobs = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const { data: alljobs = [], isLoading } = useQuery({
    queryKey: ["alljobs"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/alljobs");
      const data = await res.json();
      return data;
    },
  });

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const productsPerPage = 5;
  const totalpage = Math.floor(alljobs.length / productsPerPage);

  const offset = currentPage * productsPerPage;
  const currentProducts = alljobs.slice(offset, offset + productsPerPage);

  if (!alljobs) {
    return <Loader></Loader>;
  }

  return (
    <div>
      {currentProducts.map((job) => (
        <Job key={job._id} job={job}></Job>
      ))}

      <div className="flex mx-6 justify-center my-20">
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={totalpage}
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

export default Jobs;
