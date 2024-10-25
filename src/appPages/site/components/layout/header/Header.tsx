"use client";
import scss from "./Header.module.scss";
import Link from "next/link";
import logo from "../../../../../assets/logo/logo.ico";
import Image from "next/image";
import { links } from "@/constants/links";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Link href={"/"}>
              <Image src={logo} alt="Logo" />
              <h2>BekMovie</h2>
            </Link>
          </div>
          <nav>
            <ul>
              {links.map((item, index) => (
                <p key={index}>
                  <Link
                    className={
                      pathname === item.href
                        ? `${scss.link} ${scss.active}`
                        : `${scss.link}`
                    }
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </p>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
