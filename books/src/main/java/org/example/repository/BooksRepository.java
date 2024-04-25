package org.example.repository;

import org.example.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
public interface BooksRepository extends PagingAndSortingRepository<Book, Long>, CrudRepository<Book, Long> {
    @Query("SELECT j FROM Book j WHERE " +
            "( :minPrice IS NULL OR j.price >= :minPrice ) AND " +
            "( :maxPrice IS NULL OR j.price <= :maxPrice )")

    Page<Book> findBooksByFilters(
            Integer minPrice,
            Integer maxPrice,
            Pageable pageable
    );
}
