import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-white px-6 py-4">
      <nav className="mx-auto max-w-5xl">
        <ul className="flex flex-row gap-6">
          <li className="text-4xl">
            <Link href="/">Главная</Link>
          </li>
          <li className="text-4xl">
            <Link href="/book/add">Разместить книгу</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
