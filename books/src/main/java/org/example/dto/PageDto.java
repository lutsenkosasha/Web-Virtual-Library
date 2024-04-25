package org.example.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PageDto {
    private int number;
    private int size;
    private Integer minPrice;
    private Integer maxPrice;
    private Sort.Direction sortDirection = Sort.Direction.ASC;
    private String sortBy="id";

    public Pageable getPageable() {
        return PageRequest.of(
                this.number,
                this.size,
                this.sortDirection,
                this.sortBy
        );
    }
}
