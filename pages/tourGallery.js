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
      <div className="px-3 md:px-20 py-10 m-auto">
        <h1 className="uppercase text-5xl md:mt-20 text-center mb-10 font-semibold text-primary">
          {t("gallery")}
        </h1>
        <div className="flex flex-col gap-5">
          <img src="/img1.jpg" alt="" className="w-full object-cover" />
          <img src="/img2.jpg" alt="" className="w-full object-cover" />
          <img src="/img3.jpg" alt="" className="w-full object-cover" />
          <img src="/img4.jpg" alt="" className="w-full object-cover" />
          <img src="/img5.jpg" alt="" className="w-full object-cover" />
          <img src="/img6.jpg" alt="" className="w-full object-cover" />
          <img src="/img7.jpg" alt="" className="w-full object-cover" />
        </div>
      </div>
      <Footer />
    </>
  )
}
