import * as React from "react";
import { LinkToHome, LinkToSearch } from "../Links";
import { NavigationLink } from "./NavigationLink";

export const Header = () => {
  return (
    <header className="flex items-center justify-end flex-wrap absolute  p-6 w-full">
      <ul className="flex gap-x-5">
        <li>
          <LinkToHome>
            <NavigationLink>Home</NavigationLink>
          </LinkToHome>
        </li>
        <li>
          <LinkToSearch>
            <NavigationLink>Search</NavigationLink>
          </LinkToSearch>
        </li>
      </ul>
    </header>
  );
};
