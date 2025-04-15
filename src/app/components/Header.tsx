"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Menu from "./Menu";

const Header: React.FC = () => {
  const [menu, setMenu] = useState(false);
  return (
    <section className="flex justify-between items-center p-4">
      <div className="relative">
        <Image src="/logo.svg" alt="Logo" width={150} height={40} />
      </div>
      <div className="flex relative w-[70px] h-[50px]">
        <Image
          src="/burger-menu.svg"
          alt="Menu"
          fill
          className="cursor-pointer opacity-80"
          onClick={() => setMenu(true)}
        />
      </div>
      <Menu setMenu={setMenu} menu={menu} />
    </section>
  );
};
export default Header;

