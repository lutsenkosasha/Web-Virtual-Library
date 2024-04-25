package org.example.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "book")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "book_id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "author")
    private String author;

    @Column(name = "price")
    private Integer price;

    @Column(name = "genre")
    private String genre;

    @Column(name = "year_of_publication")
    private Integer year_of_publication;

    @Column(name = "publishing_house")
    private String publishing_house;

    @Column(name = "description")
    private String description;

    @Column(name = "image")
    private String image;
}