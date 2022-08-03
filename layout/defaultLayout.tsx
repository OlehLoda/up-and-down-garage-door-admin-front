import Link from "next/link";
import s from "./defaultLayout.module.css";

export default function DefaultLayout({ children }: any) {
  return (
    <>
      <header className={s.headerWrap}>
        <input
          type="checkbox"
          name=""
          id="burgerBtn"
          className={s.openMainMenu}
        />
        <label htmlFor="burgerBtn" className={s.burgerBtn}>
          <span className={s.firstBrgLine}></span>
          <span className={s.secondBrgLine}></span>
          <span className={s.thirdBrgLine}></span>
        </label>
        <h1>
          ADMIN PANEL for{" "}
          <a href="https://uadgaragedoors.com/">
            <img
              src="https://uadgaragedoors.com/_next/static/images/MainLogo-f6858a4d439fbe7291d4a1fc1c544f12.svg"
              height={"40px"}
            />
          </a>
        </h1>
        <ul className={s.mainMenu}>
          <li className={s.oneMainMenuLink}>
            <Link href="/" passHref>
              <a>Main Page</a>
            </Link>
          </li>
          <li className={s.oneMainMenuLink}>
            <Link href="/blogs" passHref>
              <a>Blogs</a>
            </Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
    </>
  );
}
