import * as React from "react";
import { LinkToHome, LinkToSearch } from "./Links";

export const Header = () => {
  return (
    <header className="flex items-center justify-end flex-wrap  p-6 fixed w-full">
      <ul className="flex gap-x-5">
        <li className="p-3 rounded bg-indigo-900 hover:bg-indigo-700 transition cursor-pointer text-white bold shadow-md">
          <LinkToHome>Home</LinkToHome>
        </li>
        <li className="p-3 rounded bg-indigo-900 hover:bg-indigo-700 transition cursor-pointer text-white text-semibold shadow-md">
          <LinkToSearch>Search</LinkToSearch>
        </li>
      </ul>
    </header>
  );
};
