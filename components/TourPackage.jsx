import Link from "next/link"
import { useTranslation } from "next-i18next"

export default function TourPackage() {
  const { t } = useTranslation("home")
  return (
    <div className="flex justify-around flex-col md:flex-row gap-10 mt-10">
      <div className="w-full md:w-4/12">
        <img src="/pack2.png" alt="" className="rounded-xl object-cover " />
        <div className="p-2 flex flex-col gap-2 mt-2 text-secondary">
          <h1 className="text-2xl font-semibold ">{t("pack2Title")}</h1>
          <p>{t("pack2Subtitle")}</p>

          <Link href="/tourServices">
            <button className="uppercase text-sm font-medium w-40 bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary hover:bg-opacity-95">
              {t("infoBtn")}
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-4/12">
        <img src="/pack1.jpg" alt="" className="rounded-xl object-cover " />
        <div className="p-2 flex flex-col gap-2 mt-2 text-secondary">
          <h1 className="text-2xl font-semibold ">{t("pack1Title")}</h1>
          <p>{t("pack1Subtitle")}</p>
          <Link href="/tourServices">
            <button className="uppercase text-sm font-medium w-40 bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary hover:bg-opacity-95">
              {t("infoBtn")}
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full md:w-4/12">
        <img src="/pack3.jpg" alt="" className="rounded-xl object-cover " />
        <div className="p-2 flex flex-col gap-2 mt-2 text-secondary">
          <h1 className="text-2xl font-semibold ">{t("pack3Title")}</h1>
          <p>{t("pack3Subtitle")}</p>
          <Link href="/tourServices">
            <button className="uppercase text-sm font-medium w-40 bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary hover:bg-opacity-95">
              {t("infoBtn")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
