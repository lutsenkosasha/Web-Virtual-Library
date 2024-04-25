import { Book, BooksRequestParams, Page} from "~/types";
import { apiInstance } from "./instance";

export const getBooks = (params?: BooksRequestParams) => {
  return apiInstance.get<Page<Book[]>>("/books", {
    params,
    paramsSerializer: { indexes: null },
  });
};

export const getBookById = (id: number) => {
  return apiInstance.get<Book>(`/books/${id}`);
};

export const addBook = (book: Book) => {
  return apiInstance.post("/books", book);
};

export const updateBook = (id: number, book: Book) => {
  return apiInstance.put(`/books/${id}`, book);
};

export const deleteBook = (id: number) => {
  return apiInstance.delete(`/books/${id}`);
};
