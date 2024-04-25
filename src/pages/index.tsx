import React, { useState, useEffect } from "react";
import ListBook from "~/components/ListBook";
import Pagination from "~/components/Pagination";
import { Book, BooksSort, BooksSortField, Page, ValueNamePair } from "~/types";
import { GetServerSideProps } from "next";
import { getBooks } from "~/api/books";
import { useBooks } from "~/hooks";
import { DropDown } from "~/components/DropDown";
import PriceRangeInput from "~/components/PriceRangeInput";
import { Spinner } from "@material-tailwind/react";

type BookListPageProps = {
  booksPage: Page<Book[]>;
};


const BookListPage = ({
  booksPage: initialPage,
}: BookListPageProps) => {
  const { booksPage, isLoading, refetch } = useBooks(initialPage);
  const [page, setPage] = useState(booksPage.number);
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [sortDirection, setSortDirection] = useState<ValueNamePair<BooksSort>>({
    value: "asc",
    name: "По возрастанию",
  });
  const [sortField, setSortField] = useState<ValueNamePair<BooksSortField>>({
    value: "title",
    name: "Название",
  });

  const createRequest = (currentPage: number = page) => {
    return {
      number: currentPage,
      size: 9,
      minPrice: minPrice != "" ? minPrice : undefined,
      maxPrice: maxPrice != "" ? maxPrice : undefined,
      sortBy: sortField.value,
      sortDirection: sortDirection.value,
    };
  };

  const handleSearchButtonClick = () => {
    refetch(createRequest());
  };

  const handlePageChange = (newPageNumber: number) => {
    setPage(newPageNumber - 1);
    refetch(createRequest(newPageNumber - 1));
  };

  return (
    <div className="container mx-auto flex flex-col items-center p-4">
      <div className="flex w-full items-center  justify-between gap-2">
        <PriceRangeInput
          min={minPrice}
          max={maxPrice}
          onMinChange={setMinPrice}
          onMaxChange={setMaxPrice}
        />
        <DropDown
          options={[
            { value: "title", name: "Название" },
            { value: "author", name: "Автор" },
            { value: "price", name: "Цена" },
          ]}
          value={sortField}
          onChange={setSortField}
        />
        <DropDown
          options={[
            { value: "asc", name: "По возрастанию" },
            { value: "desc", name: "По убыванию" },
          ]}
          value={sortDirection}
          onChange={setSortDirection}
        />
        <button
          onClick={handleSearchButtonClick}
          className="rounded bg-gray-700 px-4 py-2 font-bold text-cyan-50 text-lg hover:bg-gray-600"
        >
          Найти
        </button>
      </div>
      {isLoading ? (
        <Spinner className="h-24 w-24" />
      ) : (
        <>
          <ListBook books={booksPage.content} />
          <Pagination
            currentPage={Math.min(booksPage.number + 1, booksPage.totalPages)}
            totalPages={booksPage.totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default BookListPage;

export const getServerSideProps: GetServerSideProps<
  BookListPageProps
> = async () => {
  const booksResponse = getBooks({ number: 0, size: 9 });

  return {
    props: {
      booksPage: (await booksResponse).data,
    },
  };
};
