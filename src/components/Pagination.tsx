import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex w-fit items-center gap-2 text-3xl">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className={`rounded-r bg-transparent px-4 py-2 font-bold text-gray-800 hover:text-green-100 ${
          currentPage <= 1 ? "invisible" : ""
        }`}
      >
        <ArrowLeftIcon className="h-10" />
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className={`rounded-r bg-transparent px-4 py-2 font-bold text-gray-800 hover:text-green-100 ${
          currentPage >= totalPages ? "invisible" : ""
        }`}
      >
        <ArrowRightIcon className="h-10" />
      </button>
    </div>
  );
};

export default Pagination;
