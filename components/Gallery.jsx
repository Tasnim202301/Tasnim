// import AliceCarousel from "react-alice-carousel"
// import "react-alice-carousel/lib/alice-carousel.css"
import { useTranslation } from "next-i18next"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function TourGallery({ gallery }) {
  const { t } = useTranslation("home")
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <div className="px-5 md:px-20 py-10 m-auto">
      <h1 className="uppercase text-5xl text-center font-semibold text-secondary">
        {t("gallery")}
      </h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        className="my-10 md:my-20"
      >
        <div>
          <img src="/img1.jpg" alt="" className="w-11/12 h-60 object-cover" />
        </div>
        <div>
          <img src="/img2.jpg" alt="" className="w-11/12 h-60 object-cover" />
        </div>
        <div>
          <img src="/img3.jpg" alt="" className="w-11/12 h-60 object-cover" />
        </div>
        <div>
          <img src="/img4.jpg" alt="" className="w-11/12 h-60 object-cover" />
        </div>
        <div>
          <img src="/img5.jpg" alt="" className="w-11/12 h-60 object-cover" />
        </div>
        <div>
          <img src="/img6.jpg" alt="" className="w-11/12 h-60 object-cover" />
        </div>
        <div>
          <img src="/img7.jpg" alt="" className="w-11/12 h-60 object-cover" />
        </div>
      </Carousel>
    </div>
  )
}
