package org.example.service.impl;

import lombok.AllArgsConstructor;
import org.example.entity.Book;
import org.example.repository.BooksRepository;
import org.example.service.BooksFilter;
import org.example.service.BooksService;
import org.example.service.model.BookModel;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
@Transactional
public class BooksServiceImpl implements BooksService {

    private final BooksRepository booksRepository;
    private final ModelMapper mapper = new ModelMapper();

    @Override
    public BookModel getBookById(Long id) {
        Book book = booksRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("There is no book with id=" + id));
        return mapper.map(book, BookModel.class);
    }

    @Override
    public Page<BookModel> getBooksByFilter(Pageable pageable, BooksFilter filter) {
        return booksRepository.findBooksByFilters(
                        filter.getMinPrice(),
                        filter.getMaxPrice(),
                        pageable)
                .map(x -> mapper.map(x, BookModel.class));
    }

    @Override
    public BookModel addBook(BookModel book) {
        Book bookEntity = mapper.map(book, Book.class);
        bookEntity = booksRepository.save(bookEntity);

        return mapper.map(bookEntity, BookModel.class);
    }

    @Override
    public BookModel updateBook(Long id, BookModel book) {

        Book bookEntity = booksRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Book entity doesn't exist"));

        bookEntity.setTitle(book.getTitle());
        bookEntity.setAuthor(book.getAuthor());
        bookEntity.setGenre(book.getGenre());
        bookEntity.setPrice(book.getPrice());
        bookEntity.setYear_of_publication(book.getYear_of_publication());
        bookEntity.setPublishing_house(book.getPublishing_house());
        bookEntity.setDescription(book.getDescription());
        bookEntity.setImage(book.getImage());

        bookEntity = booksRepository.save(bookEntity);

        return mapper.map(bookEntity, BookModel.class);
    }

    @Override
    public void deleteBookById(Long id) {
        if (!booksRepository.existsById(id)) {
            throw new RuntimeException("There is no book with id=\" + id.");
        }
        booksRepository.deleteById(id);
    }
}