import classNames from "classnames"
import Link from "next/link"
import Footer from "../components/Footer"
import TourGallery from "../components/Gallery"
import Nav from "../components/Nav"
import TourPackage from "../components/TourPackage"
import styles from "../styles/main.module.css"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

// export async function getStarted({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["home"])),
//     },
//   }
// }

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home"])),
  },
})

export default function Home(props) {
  const { t } = useTranslation("home")
  // const router = useRouter()
  // const { locale } = router

  // const t = locale === "en-Us" ? enUs : ru

  return (
    <div className="w-full">
      <Nav />
      <div
        style={{
          backgroundSize: "cover",
          backgroundImage: 'url("/main2.png")',
          overflow: "hidden",
          backgroundPosition: "center",
          height: "full",
          width: "full",
        }}
      >
        <div className="flex flex-col justify-center h-screen px-3 md:px-20">
          <h1
            className={classNames(
              "text-4xl md:text-6xl w-9/12 lg:w-10/12 z-10 text-left font-black text-white"
            )}
          >
            {t("headline")}
          </h1>
          <p className=" w-full lg:w-9/12 text-lg my-6 text-slate-200 font-medium">
            {t("subtitle")}
          </p>
          <Link href="/tourServices">
            <button className="uppercase w-44 p-3 px-4 text-sm font-medium bg-additional hover:bg-opacity-95 text-white">
              {t("mainBtn")}
            </button>
          </Link>
        </div>
      </div>
      <div className="px-5 md:px-20 py-10 m-auto">
        <h1 className="uppercase text-5xl text-center mb-10 font-semibold text-secondary">
          {t("tours")}
        </h1>
        <TourPackage />
      </div>
      <TourGallery />
      <Footer />
    </div>
  )
}
