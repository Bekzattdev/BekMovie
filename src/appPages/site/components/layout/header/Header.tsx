"use client";
import scss from "./Header.module.scss";
import Link from "next/link";
import logo from "../../../../../assets/logo/logo.ico";
import Image from "next/image";
import { links } from "@/constants/links";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useHeaderStore } from "@/stores/useHeaderStore";
import { IoClose, IoMenu } from "react-icons/io5";
import axios from "axios";
interface IUser {
  id?: number;
  email: string;
  name: string;
  posts?: IFavorite[];
}

interface IFavorite {
  id: number;
  movieName: string;
  poster: string;
  movieID: number;
  releaseDate: string;
  voteAverage: string;
  mediaType: string;
  createdAt: string;
  updatedAt: string;
  User: IUser;
}
const Header = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { isMobile, setIsMobile } = useHeaderStore();

  const createUser = async (data: IUser) => {
    const { email, name } = data;
    try {
      const newUser = {
        email,
        name,
      };
      const { data: res } = await axios.post("/api/auth/me", newUser);
      console.log(res, "User auth");
    } catch (error) {
      console.error(error);
    }
  };

  const getUser = async () => {
    const { data: res } = await axios("/api/auth/favorites");
    console.log(res, "User List");
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (session?.user?.email && session?.user?.name) {
      const newUser: IUser = {
        email: session?.user?.email,
        name: session?.user?.name,
      };
      setTimeout(() => {
        createUser(newUser);
      }, 2000);
    }
  }, [session]);

  const changeIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    changeIsMobile();
    window.addEventListener("resize", changeIsMobile);
    return () => {
      window.removeEventListener("resize", changeIsMobile);
    };
  }, []);

  return (
    <header className={`${scss.Header} ${mobileMenu ? scss.active : ""}`}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Link href="/">
              <Image src={logo} alt="Logo" width={40} height={40} />
              <h2>BekMovie</h2>
            </Link>
          </div>
          <nav className={scss.nav}>
            {!isMobile ? (
              <ul>
                {links.map((item, index) => (
                  <p key={index}>
                    <Link
                      className={
                        pathname === item.href
                          ? `${scss.link} ${scss.active}`
                          : scss.link
                      }
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </p>
                ))}
                {session ? (
                  <img
                    onClick={() => setOpenMenu(!openMenu)}
                    className={scss.userImage}
                    src={session.user?.image!}
                    alt="user"
                  />
                ) : (
                  <button
                    onClick={() => router.push("/api/auth/signin")}
                    className={scss.signInButton}
                  >
                    Sign in
                  </button>
                )}
              </ul>
            ) : (
              <span
                onClick={() => setMobileMenu(!mobileMenu)}
                className={scss.mobileMenuIcon}
              >
                {mobileMenu ? <IoClose /> : <IoMenu />}
              </span>
            )}
          </nav>
          {openMenu && (
            <div className={scss.openMenu}>
              <button
                onClick={() =>
                  signOut({
                    callbackUrl: "/",
                  })
                }
              >
                Sign Out
              </button>
            </div>
          )}
          <div
            onClick={() => setMobileMenu(false)}
            className={`${scss.mobile} ${mobileMenu ? scss.active : ""}`}
          >
            <div className={scss.mobileLinks}>
              {session ? (
                <img
                  onClick={() => setOpenMenu(!openMenu)}
                  className={scss.userImage}
                  src={session.user?.image!}
                  alt="user"
                />
              ) : (
                <button
                  onClick={() => router.push("/api/auth/signin")}
                  className={scss.signInButton}
                >
                  Sign in
                </button>
              )}
              <Link href="/explore/movie">Movie</Link>
              <Link href="/explore/tv">TV Shows</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
