import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Marketplace1 from "../../public/marketplace/marketplace1.png";
import Marketplace2 from "../../public/marketplace/marketplace2.png";
import Marketplace3 from "../../public/marketplace/marketplace3.png";

const Marketplace = () => {
    const data = [
        Marketplace1,
        Marketplace2,
        Marketplace3
    ]

    return (
        <>
            <div className="bg-[#131313] py-12 md:py-24 mb-24">
                <div className="container mx-auto text-white">
                    <h1 className="text-center heading text-[24px] md:text-[48px] uppercase mx-5 md:mx-0">
                        Market
                        <span className="text-red-500">
                            Place
                        </span>
                    </h1>
                    <div className="hidden md:flex carousel my-10">
                        <Swiper
                            effect="coverflow"
                            slidesPerView={2}
                            centeredSlides={true}
                            className="mySwiper"
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                            }}
                            modules={[EffectCoverflow, Autoplay]}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 200,
                                modifier: 1,
                                slideShadows: true,
                            }}
                        >
                            {data.map((data, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        {/* <div className="w-[314px] h-[178px] md:w-[1042px] md:h-[586px]"> */}
                                        <Image
                                            src={data}
                                            alt="MarketPlace"
                                            width={1042}
                                            height={586}
                                            className="marketplaceImage"
                                        />
                                        {/* </div> */}
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                    <div className="md:hidden carousel my-10">
                        <Swiper
                            // effect="coverflow"
                            slidesPerView={1}
                            centeredSlides={true}
                            className="mySwiper"
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                            }}
                            modules={[Autoplay]}
                        >
                            {data.map((data, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="flex justify-center">
                                        <Image
                                            src={data}
                                            alt="MarketPlace"
                                            width={314}
                                            height={178}
                                            className="marketplaceImage"
                                        />
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                    <div className="hidden md:flex text-white text-xl text-center w-2/3 mx-auto">
                        <p>
                            An interactive Marketplace allows holders to trade their
                            in-game assets and land plots by using the $RAW
                            token. This is the economic backbone of the RAW Ecosystem.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Marketplace;