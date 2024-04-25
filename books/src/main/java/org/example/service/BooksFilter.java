package org.example.service;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BooksFilter {
    private Integer minPrice;
    private Integer maxPrice;
}
