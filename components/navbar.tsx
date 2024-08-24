import { Navbar as NextUINavbar, NavbarContent } from "@nextui-org/navbar";
import NextLink from "next/link";

import { title } from "./primitives";

import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NextLink passHref href="/">
          <div className={title()}>Go Football</div>
        </NextLink>
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitch />
      </NavbarContent>
    </NextUINavbar>
  );
};
