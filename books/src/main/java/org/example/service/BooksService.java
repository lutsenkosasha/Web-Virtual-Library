package org.example.service;

import org.example.service.model.BookModel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BooksService {
    BookModel getBookById(Long id);

    Page<BookModel> getBooksByFilter(Pageable pageable, BooksFilter filter);

    BookModel addBook(BookModel book);

    BookModel updateBook(Long id, BookModel book);

    void deleteBookById(Long id);
}

