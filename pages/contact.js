import Footer from "../components/Footer"
import Nav from "../components/Nav"
import { BsTelephoneFill } from "react-icons/bs"
import { MdOutlineEmail } from "react-icons/md"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home"])),
  },
})

export default function Contact() {
  const { t } = useTranslation("home")
  return (
    <>
      <Nav />
      <div className="px-5 md:px-20 py-28 m-auto text-secondary">
        <div className="flex justify-center items-center gap-16 mt-16">
          <div className="flex flex-col gap-5">
            <h1 className="text-primary text-4xl font-bold">
              {t("contactTitle")}
            </h1>
            <p className="font-medium">{t("contactSubtitle")}</p>
            <div className="flex items-center gap-5">
              <BsTelephoneFill size={20} />
              <p> {t("numbers")}</p>
            </div>
            {/* <div className="flex items-end gap-3">
              <MdOutlineEmail size={25} />
              <p>{t("emails")}</p>
            </div> */}
          </div>
          <div>
            <img
              src="/img8.jpg"
              alt=""
              className="w-full h-96 object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
