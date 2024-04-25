package org.example.controller;

import lombok.AllArgsConstructor;
import org.example.dto.BookDto;
import org.example.dto.PageDto;
import org.example.service.BooksFilter;
import org.example.service.BooksService;
import org.example.service.model.BookModel;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/books")
public class BooksController {
    private final BooksService booksService;
    private final ModelMapper modelMapper = new ModelMapper();

    @GetMapping("/{id}")
    public BookDto getBookById(@PathVariable Long id) {
        return modelMapper.map(booksService.getBookById(id), BookDto.class);
    }

    @GetMapping
    public Page<BookDto> getBooks(PageDto page) {
        return booksService.getBooksByFilter(
                        page.getPageable(),
                        modelMapper.map(page, BooksFilter.class))
                .map(x -> modelMapper.map(x, BookDto.class));
    }

    @PostMapping
    public BookDto addBook(@RequestBody BookDto bookDto) {
        BookModel book = modelMapper.map(bookDto, BookModel.class);
        return modelMapper.map(booksService.addBook(book), BookDto.class);
    }

    @PutMapping("/{id}")
    public BookDto updateBook(@PathVariable Long id, @RequestBody BookDto bookDto) {
        BookModel book = modelMapper.map(bookDto, BookModel.class);
        return modelMapper.map(booksService.updateBook(id, book), BookDto.class);
    }

    @DeleteMapping("/{id}")
    public void deleteBookById(@PathVariable Long id) {
        booksService.deleteBookById(id);
    }
}