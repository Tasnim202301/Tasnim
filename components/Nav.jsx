import Link from "next/link"
import { useEffect, useState } from "react"
import { HiMenu } from "react-icons/hi"
import { IoClose } from "react-icons/io5"
import { useTranslation } from "next-i18next"
import classNames from "classnames"

export default function Nav({ bgColor }) {
  // const [show, setShow] = useState(true)
  const { t } = useTranslation("home")
  const [showMenu, setShowMenu] = useState(false)
  const navText =
    "border-b-white hover:border-b-2 font-medium hover:border-opacity-100 cursor-pointer transition border-b-2 border-opacity-0"

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [showMenu])

  return (
    <div
      className={classNames(
        "flex w-full bg-primary flex-grow justify-between md:absolute items-center md:p-4 p-1 px-2 md:px-20 z-30",
        bgColor
      )}
    >
      <div className="flex items-center gap-2">
        <div className="lg:hidden">
          <HiMenu
            size={32}
            onClick={() => setShowMenu(true)}
            className="text-white"
          />
        </div>
        <div className="pr-1 cursor-pointer">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              layout="cover"
              height="100px"
              width="100px"
              className="w-32 md:w-32"
            />
          </Link>
        </div>
      </div>
      <div>
        <ul
          className={
            showMenu
              ? "fixed text-white bg-primary text-2xl px-5 top-0 list-none left-0 w-full h-screen overflow-scroll z-50"
              : "hidden lg:flex font-medium gap-10 text-white list-none "
          }
        >
          {showMenu && (
            <div className="mt-5 mb-5 ml-0 flex justify-between">
              <div className=" cursor-pointer">
                <Link href="/">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    layout="fill"
                    height="100px"
                    width="100px"
                    className="w-40 md:w-full"
                  />
                </Link>
              </div>
              <IoClose
                size={36}
                className=""
                onClick={() => setShowMenu(false)}
              />
            </div>
          )}

          <li className={navText}>
            <Link href="/">
              <h1 className="my-2 md:my-0">{t("navHome")}</h1>
            </Link>
          </li>
          <li className={navText}>
            <Link href="/about-us">
              <h1 className="my-2 md:my-0">{t("navAbout")}</h1>
            </Link>
          </li>
          <li className={navText}>
            <Link href="/tourServices">
              <h1 className="my-2 md:my-0">{t("navTours")}</h1>
            </Link>
          </li>
          <li className={navText}>
            <Link href="/tourGallery">
              <h1 className="my-2 md:my-0">{t("navGallery")}</h1>
            </Link>
          </li>
          <li className={navText}>
            <Link href="/contact">
              <h1 className="my-2 md:my-0">{t("navContact")}</h1>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-5 bg-primary">
        {/* <Link href="/en" locale="en">
          <h1
            onClick={handleActiveNav}
            to="/en"
            style={{
              color: active ? "#fff" : "#545e6f",
            }}
            className="btnLink"
          >
            EN
          </h1>
        </Link> */}
        <Link href="/" locale="uz">
          <h1 className="btnLink">UZ</h1>
        </Link>
        <Link href="/" locale="en">
          <h1 className="btnLink">EN</h1>
        </Link>
        <Link href="/" locale="ru">
          <h1 className="btnLink">RU</h1>
        </Link>
      </div>
      {/* <button onClick={handleClick}>Langs</button> */}
    </div>
  )
}
