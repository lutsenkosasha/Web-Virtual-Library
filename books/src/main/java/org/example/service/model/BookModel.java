package org.example.service.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookModel {
    private Long id;
    private String title;
    private String author;
    private Integer price;
    private String genre;
    private Integer year_of_publication;
    private String publishing_house;
    private String description;
    private String image;
}
