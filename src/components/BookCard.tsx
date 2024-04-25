import Link from "next/link";
import React from "react";
import { Book } from "~/types";

type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Link href={`/book/${book.id}`}>
      <div className="flex flex-col gap-3">
        <div className="flex h-96 items-center justify-center bg-white p-4">
          <img
            className="h-full w-full object-contain"
            src={book.image}
            alt={book.title}
          />
        </div>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">
          {book.title}
        </p>
      </div>
    </Link>
  );
};

export default BookCard;
