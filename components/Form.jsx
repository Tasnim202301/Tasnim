import { useTranslation } from "next-i18next"

export default function Form() {
  const { t } = useTranslation("home")
  const inputControl =
    "border-b-2 rounded-none w-full border-gray-200 bg-inherit p-2 outline-none placeholder-gray-200"

  return (
    <div className="w-full lg:w-7/12 m-auto text-white p-10 lg-5 lg:px-20 flex flex-col gap-5 my-5">
      <input
        type="text"
        placeholder={t("name")}
        className={inputControl}
        required
      />
      <input
        type="email"
        placeholder={t("email")}
        className={inputControl}
        required
      />
      <input
        type="text"
        placeholder={t("message")}
        className={inputControl}
        required
      />
      <button className="bg-gray-200 text-secondary font-medium p-2 px-5 w-full hover:bg-opacity-95">
        {t("btn")}
      </button>
    </div>
  )
}
