import Footer from "../components/Footer"
import Nav from "../components/Nav"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home"])),
  },
})

export default function TourGallery() {
  const { t } = useTranslation("home")

  return (
    <>
      <Nav />
      <div className="px-5 md:px-20 py-10 m-auto text-secondary">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-5 ">
            <h1 className="uppercase mt-8 md:mt-20 text-5xl text-center font-semibold text-primary">
              {t("company")}
            </h1>
            <p className="text-lg text-center w-full md:w-7/12">
              {t("aboutCompany")}
            </p>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-5">
            <div className="bg-gray-100 w-full md:w-8/12 flex flex-col justify-center items-center gap-5 p-5 md:p-0 text-secondary">
              <h1 className="uppercase text-3xl text-center font-semibold text-primary">
                {t("whoWeAre")}
              </h1>
              <p className="text-sm text-center w-10/12">{t("aboutUs")}</p>
              <p className="text-lg font-semibold text-center">
                {t("contactUs")}
              </p>
            </div>
            <div className="bg-gray-100 w-full md:w-8/12">
              <img src="/img7.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
