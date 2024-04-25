import { useState } from "react";
import { api } from "~/api";
import { getBooks } from "~/api/books";

import { Book, BooksRequestParams, Page } from "~/types";

export const useBooks = (initialBooks: Page<Book[]>) => {
  const [booksPage, setBooksPage] = useState(initialBooks);
  const [isLoading, setIsLoading] = useState(false);

  const refetch = async (params: BooksRequestParams) => {
    setIsLoading(true);

    try {
      const response = await getBooks(params);

      setBooksPage(response.data);
    } catch {
      // Обработать ошибку, например показать ее через react-toastify
    }

    setIsLoading(false);
  };

  return { booksPage, isLoading, refetch };
};
