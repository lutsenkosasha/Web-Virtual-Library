import { GetServerSideProps } from "next";
import React from "react";
import { api } from "~/api";
import { BookForm } from "~/components/BookForm";
import { BookInfo } from "~/components/BookInfo";
import { Book } from "~/types";

type BookEditPageProps = {
  id: number;
  book: Book;
};

const BookEditPage = ({id, book}: BookEditPageProps) => {
  const handleSubmitForm = (newBook: Book) => {
    api.books.updateBook(id, newBook);
    window.location.replace("/");
  };

  return (
    <BookForm
      book={book}
      onSubmit={handleSubmitForm}
    />
  );
};

export const getServerSideProps: GetServerSideProps<BookEditPageProps> = async (
  ctx,
) => {
  const { params } = ctx;
  const id = params?.id;

  if (typeof id != "string") {
    return {
      notFound: true,
    };
  }
  const numberId = parseInt(id);

  if (Number.isNaN(numberId)) {
    return {
      notFound: true,
    };
  }
  const response = api.books.getBookById(numberId);

  return {
    props: {
      id: numberId,
      book: (await response).data,
    },
  };
};

export default BookEditPage;
