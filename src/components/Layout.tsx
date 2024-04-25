import { ReactNode } from "react";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
};

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={openSans.className}>
      <Header />
      <main className="flex min-h-screen justify-center bg-green-400 px-6 pt-10">
        <div className="max-w-6xl">{children}</div>
      </main>
      <footer className="bg-gray-700 py-20"></footer>
    </div>
  );
};
