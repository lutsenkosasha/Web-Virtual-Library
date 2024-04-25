
import { GetServerSideProps } from "next";
import { redirect } from "next/dist/server/api-utils";
import { api } from "~/api";
import { addBook } from "~/api/books";
import { BookForm } from "~/components/BookForm";
import { Book } from "~/types";

export const AddBook = () => {
  const handleFormSubmit = (book: Book) => {
    addBook(book);
    window.location.replace("/");
  }
  return <BookForm onSubmit={handleFormSubmit}/>;
};

export default AddBook;
