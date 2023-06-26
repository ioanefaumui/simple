import Image from "next/image";
import Container from "../Container/Container";
import MenuIcon from "./MenuIcon";
import { Poppins } from "next/font/google";

export default function Header() {
  return (
    <header className="bg-oceanic-blue text-white py-4 md:py-6 min-h-[55px] md:min-h-[76px]">
      <Container className="flex justify-between">
        <Image src="simple.svg" alt="" width={80} height={26} className="md:w-[90px]" />
        <button className="md:text-xl flex items-center gap-2">
          <MenuIcon />
          MENU
        </button>
      </Container>
    </header>
  );
}
