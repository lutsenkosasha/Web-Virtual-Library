export type BooksSort = "asc" | "desc";

export type BooksSortField = "title" | "author" | "price";

export type ValueNamePair<T> = {
  value: T;
  name: string;
};

export type BooksSortFieldText = 
  | { value: "title"; name: "Название" }
  | { value: "author"; name: "Автор" }
  | { value: "price"; name: "Цена" };

export type BooksRequestParams = {
  number: number;
  size: number;
  minPrice?: number | "" ;
  maxPrice?: number | "";
  sortBy?: BooksSortField;
  sortDirection?: BooksSort;
};

export type Book = {
  id?: number;
  title: string;
  author: string;
  price: number;
  genre: string;
  year_of_publication: number;
  publishing_house: string;
  description: string;
  image: string;
};

export type BookCreate = {
  title: string;
  author: string;
  price: number;
  genre: string;
  year_of_publication: number;
  publishing_house: string;
  description: string;
  image: string;
};

export type BookUpdate = BookCreate;

export type Page<T> = {
  content: T;
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: true;
    unpaged: false;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};