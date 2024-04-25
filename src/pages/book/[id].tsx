import { GetServerSideProps } from "next";
import React from "react";
import { api } from "~/api";
import { BookInfo } from "~/components/BookInfo";
import { Book } from "~/types";

type BooksDetailsPageProps = {
  book: Book;
};

const BookDetailsPage = ({ book }: BooksDetailsPageProps) => {
  return (
    <BookInfo book={book}/>
  );
};

export const getServerSideProps: GetServerSideProps<
  BooksDetailsPageProps
> = async (ctx) => {
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
  const response = await api.books.getBookById(numberId);

  return { props: { book: response.data } };
};

export default BookDetailsPage;
