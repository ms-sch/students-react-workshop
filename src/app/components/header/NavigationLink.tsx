"use client";
import { usePathname } from "next/navigation";

const paths: Record<string, string> = {
  home: "/",
  search: "/search",
};

export const NavigationLink = ({ children }: { children: string }) => {
  const pathname = usePathname();
  const isActive = paths[children.toLowerCase()] === pathname;

  return (
    <span
      className={`${
        isActive ? "bg-indigo-700" : "bg-indigo-900"
      } p-3 rounded hover:bg-indigo-700 transition cursor-pointer text-white bold shadow-md`}
    >
      {children}
    </span>
  );
};
