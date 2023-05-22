import Footer from "../components/Footer"
import Nav from "../components/Nav"
import Link from "next/link"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home"])),
  },
})

export default function TourServices() {
  const { t } = useTranslation("home")
  return (
    <>
      <Nav />
      <div className="px-5 md:px-20 py-32 m-auto">
        <div className="flex justify-around flex-col md:flex-row gap-10 mt-10">
          <div className="w-full md:w-4/12">
            <img src="/pack2.png" alt="" className="rounded-xl object-cover " />
            <div className="p-2 flex flex-col gap-2 mt-2 text-secondary">
              <h1 className="text-2xl font-semibold ">{t("pack2Title")}</h1>
              <p>{t("pack2Subtitle")}</p>
              <p className="text-primary font-semibold text-xl">
                {t("pack2Price")}
              </p>
              <Link href="https://payme.uz/fallback/merchant/?id=620f996e254d786693efd530">
                <button className="uppercase text-sm font-medium w-40 bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary hover:bg-opacity-95">
                  {t("buyBtn")}
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-4/12">
            <img src="/pack1.jpg" alt="" className="rounded-xl object-cover " />
            <div className="p-2 flex flex-col gap-2 mt-2 text-secondary">
              <h1 className="text-2xl font-semibold ">{t("pack1Title")}</h1>
              <p>{t("pack1Subtitle")}</p>
              <p className="text-primary font-semibold text-xl">
                {t("pack1Price")}
              </p>
              <Link href="https://payme.uz/fallback/merchant/?id=620f996e254d786693efd530">
                <button className="uppercase text-sm font-medium w-40 bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary hover:bg-opacity-95">
                  {t("buyBtn")}
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-4/12">
            <img src="/pack3.jpg" alt="" className="rounded-xl object-cover " />
            <div className="p-2 flex flex-col gap-2 mt-2 text-secondary">
              <h1 className="text-2xl font-semibold ">{t("pack3Title")}</h1>
              <p>{t("pack3Subtitle")}</p>
              <p className="text-primary font-semibold text-xl">
                {t("pack3Price")}
              </p>
              <Link href="https://payme.uz/fallback/merchant/?id=620f996e254d786693efd530">
                <button className="uppercase text-sm font-medium w-40 bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary hover:bg-opacity-95">
                  {t("buyBtn")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
