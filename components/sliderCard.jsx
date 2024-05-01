import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { BiChevronsRight } from 'react-icons/bi'

const SlideCard = (props) => {
    console.log(props.data.sliderImg[0].name)
    console.log(props.data.sliderImg[1].name)
    console.log(props.data.sliderImg[2].name)
    const slider0 = [
        {
            url: props.data.sliderImg[0].url,
            name: props.data.sliderImg[0].name
        },
        {
            url: props.data.sliderImg[1].url,
            name: props.data.sliderImg[1].name
        },
        {
            url: props.data.sliderImg[2].url,
            name: props.data.sliderImg[2].name
        }
    ]

    const slider1 = [
        {
            url: props.data.sliderImg[2].url,
            name: props.data.sliderImg[2].name
        },
        {
            url: props.data.sliderImg[0].url,
            name: props.data.sliderImg[0].name
        },
        {
            url: props.data.sliderImg[1].url,
            name: props.data.sliderImg[1].name
        }
    ]
    const slider2 = [
        {
            url: props.data.sliderImg[1].url,
            name: props.data.sliderImg[1].name
        },
        {
            url: props.data.sliderImg[2].url,
            name: props.data.sliderImg[2].name
        },
        {
            url: props.data.sliderImg[0].url,
            name: props.data.sliderImg[0].name
        }
    ]

    return (
        <>
            <div className="flex flex-col space-y-24 mt-40 pl-24 pt-24 w-1/2">
                <div className="w-full space-y-7 flex flex-col items-start">
                    <div className="flex flex-col w-full items-start w-1/2">
                        <Image src={props.data.img} alt={props.data.name} width={221} height={80} />
                    </div>
                    <p className="text-left text-white text-xl">
                        {props.data.desc}
                    </p>
                </div>
                <div className="flex flex-row opacity-50">
                    <div>
                        <div className="flex flex-row items-center w-[200px] pr-10">
                            <Swiper
                                navigation={{
                                    nextEl: ".swiperNext"
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
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <div className="w-48">
                                    {slider2.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="rounded-lg">
                                                    <Image
                                                        src={item.url}
                                                        alt={item.name}
                                                        width={200}
                                                        height={200}
                                                        className="rounded-lg"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </div>
                            </Swiper>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-row items-center w-[200px] pr-10">
                            <Swiper
                                navigation={{
                                    nextEl: ".swiperNext"
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
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <div className="w-48">
                                    {slider1.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="rounded-lg">
                                                    <Image
                                                        src={item.url}
                                                        alt={item.name}
                                                        width={200}
                                                        height={200}
                                                        className="rounded-lg"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row space-y-24 items-center pl-40 w-1/2">
                <div className="flex flex-row items-center w-[300px] pr-10">
                    <Swiper
                        navigation={{
                            nextEl: ".swiperNext"
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
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <div className="w-48">
                            {slider0.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="rounded-lg">
                                            <Image
                                                src={item.url}
                                                alt={item.name}
                                                width={300}
                                                height={300}
                                                className="rounded-lg"
                                            />
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </div>
                    </Swiper>
                </div>
                <div className="-ml-5 z-10 cursor-pointer flex justify-center items-center">
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
    )
}

export default SlideCard;