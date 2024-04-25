import React, { useState } from "react";
import { Book, BookCreate} from "~/types";
import { useForm } from "react-hook-form";

type BookFormProps = {
  book?: Book;
  onSubmit: (book: Book) => void;
};

export const BookForm = ({
  book,
  onSubmit,
}: BookFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookCreate>();

  const createBook = (inputs: BookCreate) => {
    const newBook = {
        title: inputs.title,
        author: inputs.author,
        genre: inputs.genre,
        year_of_publication: inputs.year_of_publication,
        publishing_house: inputs.publishing_house,
        price: inputs.price,
        description: inputs.description,
        image: inputs.image,
    };
    onSubmit(newBook);
  };

  return (
    <form
      onSubmit={handleSubmit(createBook)}
      className="flex w-full flex-col gap-3  text-2xl"
    >
      <input
        type="text"
        placeholder="Название"
        className="rounded border p-2"
        defaultValue={book?.title}
        {...register("title", { required: true })}
      />
      <input
        className="rounded border p-2"
        type="text"
        placeholder="Автор"
        defaultValue={book?.author}
        {...register("author", { required: true })}
      />
      <input
        className="rounded border p-2"
        type="text"
        placeholder="Жанр"
        defaultValue={book?.genre}
        {...register("genre", { required: true })}
      />
      <input
        className="rounded border p-2"
        type="number"
        placeholder="Год публикации"
        defaultValue={book?.year_of_publication}
        {...register("year_of_publication", { required: true })}
      />
      <input
        className="rounded border p-2"
        type="text"
        placeholder="Издательство"
        defaultValue={book?.publishing_house}
        {...register("publishing_house", { required: true })}
      />
      <input
        type="number"
        placeholder="Цена"
        {...register("price", {
          required: true,
          min: 10,
          valueAsNumber: true,
        })}
        defaultValue={book?.price}
        className="rounded border p-2"
      />
      <input
        className="rounded border p-2"
        type="text"
        placeholder="Изображение"
        defaultValue={book?.image}
        {...register("image", { required: true })}
      />
      <textarea
        placeholder="Описание"
        {...register("description", { required: true })}
        className="rounded border p-2"
        inputMode="text"
        defaultValue={book?.description}
      />
      <input type="submit" value="Разместить" className="bg-green-100 border rounded p-4"/>
    </form>
  );
};
