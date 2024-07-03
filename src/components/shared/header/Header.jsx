"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.png";

const Header = () => {
  return (
    <header>
      <div>
        <Image src={logo} width={120} height={100} alt="Logo" />
      </div>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/services">
          <li>Services</li>
        </Link>
        <Link href="/services">
          <li>Services</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
