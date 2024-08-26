import { Navbar as NextUINavbar, NavbarContent } from "@nextui-org/navbar";
import NextLink from "next/link";

import { title } from "./primitives";

export const Navbar = () => {
  return (
    <NextUINavbar
      className="bg-nextui-background text-nextui-foreground"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NextLink passHref href="/">
          <div className={`text-nextui-primary ${title()}`}>Go Football</div>
        </NextLink>
      </NavbarContent>
      <NavbarContent justify="end" />
    </NextUINavbar>
  );
};
