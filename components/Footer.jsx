import { useTranslation } from "next-i18next"
import Form from "./Form"

export default function Footer() {
  const { t } = useTranslation("home")
  return (
    <div className="bg-secondary text-white">
      <div className="px-5 md:px-20 py-14 m-auto">
        <div className="flex flex-col items-center gap-4">
          <h1 className="uppercase text-3xl md:text-5xl text-center font-semibold">
            {t("contact")}
          </h1>
          <p className="text-gray-300 text-lg text-center md:text-2xl">
            {t("subtitleContact")}
          </p>
          <div className="border-b-2 w-20 border-white my-3"></div>
          <p className="text-center md:text-md md:w-9/12">{t("infoContact")}</p>
        </div>
        <Form />
        <div className="flex justify-between flex-col md:flex-row">
          <h1>{t("numbers")}</h1>
          <h1>Uzbekistan, Tashkent</h1>
          {/* <h1>Info@gmail.com</h1> */}
        </div>
      </div>
    </div>
  )
}
