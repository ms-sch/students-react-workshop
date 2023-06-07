import Link from "next/link";
import * as React from "react";

export const LinkToHome = ({ children }: { children: React.ReactNode }) => {
  return <Link href="/">{children}</Link>;
};

export const LinkToSearch = ({ children }: { children: React.ReactNode }) => {
  return <Link href="/search">{children}</Link>;
};
