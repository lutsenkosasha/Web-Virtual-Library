import Link from "next/link";
import { useRouter } from "next/router";
import { api } from "~/api";
import { Book } from "~/types";

type BookInfoProps = {
  book: Book;
};

export const BookInfo = ({ book }: BookInfoProps) => {
  const router = useRouter();
  const handleDelete = () => {
    api.books.deleteBook(book.id ?? -1);
    router.replace("/");
  };

  return (
    <div className="container bg-green-200 p-6 text-4xl">
        <img
            className="h-full w-full object-contain"
            src={book.image}
            alt={book.title}
          />
      <h2 className="my-2 text-center">{book.title}</h2>
      <div className="flex w-full content-around">
        <div className="grow-0">{book.description}</div>
        <span className="grow-1 w-full max-w-[10%]"></span>
        <div className="grow-0 text-gray-700">
          <p className="">{book.author}</p>
          <p>{book.genre}</p>
          <p>{book.publishing_house}</p>
          <p>{book.year_of_publication}</p>
          <p>{book.price} рублей</p>
        </div>
      </div>
      <div className="mt-10 flex w-full gap-3 text-center">
        <Link
          href={`/book/edit/${book.id}`}
          className="border round w-full bg-green-400 p-2"
        >
          Изменить
        </Link>
        <button
          onClick={handleDelete}
          className="border round w-full bg-green-400 p-2"
        >
          Удалить
        </button>
      </div>
    </div>
  );
};
