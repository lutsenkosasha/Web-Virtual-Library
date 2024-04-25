import React from "react";
import BookCard from "~/components/BookCard";
import { Book } from "~/types";

type ListBookProps = {
  books: Book[];
};

const ListBook = ({ books }: ListBookProps) => {
  return (
    <div className="m-3 grid grid-cols-3 gap-2">
      {books.map((x) => (
        <BookCard key={x.id} book={x} />
      ))}
    </div>
  );
};

export default ListBook;
