import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { BiChevronsRight } from 'react-icons/bi'

const AssetsSliderCard = (props) => {
    const slider0 = [
        {
            url: props.data.sliderImg[0].url,
            name: props.data.sliderImg[0].name,
            desc: props.data.sliderImg[0].desc
        },
        {
            url: props.data.sliderImg[1].url,
            name: props.data.sliderImg[1].name,
            desc: props.data.sliderImg[1].desc
        },
        {
            url: props.data.sliderImg[2].url,
            name: props.data.sliderImg[2].name,
            desc: props.data.sliderImg[2].desc
        }
    ]

    const slider1 = [
        {
            url: props.data.sliderImg[2].url,
            name: props.data.sliderImg[2].name,
            desc: props.data.sliderImg[2].desc
        },
        {
            url: props.data.sliderImg[0].url,
            name: props.data.sliderImg[0].name,
            desc: props.data.sliderImg[0].desc
        },
        {
            url: props.data.sliderImg[1].url,
            name: props.data.sliderImg[1].name,
            desc: props.data.sliderImg[1].desc
        }
    ]
    const slider2 = [
        {
            url: props.data.sliderImg[1].url,
            name: props.data.sliderImg[1].name,
            desc: props.data.sliderImg[1].desc
        },
        {
            url: props.data.sliderImg[2].url,
            name: props.data.sliderImg[2].name,
            desc: props.data.sliderImg[2].desc
        },
        {
            url: props.data.sliderImg[0].url,
            name: props.data.sliderImg[0].name,
            desc: props.data.sliderImg[0].desc
        }
    ]

    return (
      <>
        <div className="flex flex-col space-y-20 mt-36 pl-24 pt-24 w-1/2">
          <div className="w-full space-y-7 flex flex-col items-start">
            <div className="flex flex-col w-full items-start w-1/2">
              <Image
                src={props.data.img}
                alt={props.data.name}
                width={221}
                height={80}
              />
            </div>
            <p className="text-left text-white text-xl">{props.data.desc}</p>
          </div>
          <div className="flex flex-row justify-around w-full opacity-50 slider-item-marg-top">
            <div className="mr-10">
              <div className="flex flex-row items-center w-[200px] rounded-lg">
                <Swiper
                  navigation={{
                    nextEl: ".swiperNext",
                  }}
                  // allowSlidePrev={false}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  // spaceBetween={30}
                  slidesPerView={1}
                  centeredSlides={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <div className="w-48 rounded-lg">
                    {slider2.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="bg-[#262626] rounded-lg w-[250px] h-[300px]">
                            <div className="w-[200px] flex justify-center items-center">
                              <Image
                                src={item.url}
                                alt={item.name}
                                width={200}
                                height={200}
                                className="rounded-lg"
                              />
                            </div>
                            <div
                              className="w-[200px] flex flex-col justify-center items-center text-center mt-2
                                                    text-white"
                            >
                              <h1 className="font-bold text-base mb-2">
                                {item.name}
                              </h1>
                              <p className="text-[7px] w-3/4">{item.desc}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="">
              <div className="flex flex-row items-center w-[200px] rounded-lg">
                <Swiper
                  navigation={{
                    nextEl: ".swiperNext",
                  }}
                  // allowSlidePrev={false}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  // spaceBetween={30}
                  slidesPerView={1}
                  centeredSlides={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <div className="w-48 rounded-lg">
                    {slider1.map((item, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <div className="bg-[#262626] rounded-lg w-[250px] h-[300px]">
                            <div className="w-[200px] flex justify-center items-center">
                              <Image
                                src={item.url}
                                alt={item.name}
                                width={200}
                                height={200}
                                className="rounded-lg"
                              />
                            </div>
                            <div
                              className="w-[200px] flex flex-col justify-center items-center text-center mt-2
                                                    text-white"
                            >
                              <h1 className="font-bold text-base mb-2">
                                {item.name}
                              </h1>
                              <p className="text-[7px] w-3/4">{item.desc}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center mx-auto space-y-24 items-center pl-40 w-1/2 pr-28 ">
          <div className="flex flex-row items-center w-[300px] rounded-lg">
            <Swiper
              navigation={{
                nextEl: ".swiperNext",
              }}
              // allowSlidePrev={false}
              pagination={{
                clickable: true,
              }}
              loop={true}
              // spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <div className="w-48 rounded-lg">
                {slider0.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="bg-[#262626] rounded-lg w-[300px] h-[450px]">
                        <div className="w-[300px] flex justify-center items-center">
                          <Image
                            src={item.url}
                            alt={item.name}
                            width={300}
                            height={300}
                            className="rounded-lg"
                          />
                        </div>
                        <div
                          className="w-[300px] flex flex-col justify-center items-center text-center mt-2
                                                    text-white"
                        >
                          <h1 className="font-bold text-[24px] mb-2">
                            {item.name}
                          </h1>
                          <p className="text-[13px] w-3/4">{item.desc}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
          <div className="ml-10 z-10 cursor-pointer flex justify-center items-center">
            <BiChevronsRight className="swiperNext text-white w-14 h-14" />
          </div>
        </div>
        <style jsx>{`
          .swiper-button-prev {
            display: none !important;
          }

          .swiper-button-next {
            display: block !important;
          }
        `}</style>
      </>
    );
}

export default AssetsSliderCard;