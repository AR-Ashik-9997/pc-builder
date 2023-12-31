import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";

const bannerImg = [
  {
    img: "https://i.ibb.co/KsYq90k/hero-3.jpg",
  },
  {
    img: "https://i.ibb.co/CKcKZhY/cm-yellow-1-1638119549252.png",
  },
  {
    img: "https://i.ibb.co/Cwcfn4c/hero-2.jpg",
  },
  {
    img: "https://i.ibb.co/R3MrbP9/maxresdefault.jpg",
  },
];
const TopBanner = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full lg:w-3/4 xl:w-1/2 p-4">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {bannerImg.map((item, i) => (
            <SwiperSlide key={i}>
              <Image
                src={item.img}
                width={900}
                height={900}
                className="rounded-xl"
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopBanner;
