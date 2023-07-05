import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import styles from "./Banner.module.css";
console.log(styles);
const Banner = () => {
    return (
        <div>
            <Swiper
             modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{
                delay:2000
            }}
            
            >
                <SwiperSlide>
                    {/* <img src="" className='w-full h-screen object-cover'/>
                <div className={`styles.slidercontent`}>
                    <h1>Shop the Latest Trends: Discover Fashion Must-Haves on Our E-Commerce Site! </h1>
                    <p>From Street Style to Runway: Elevate Your Style Game with Our Fashion Collection</p>
                </div> */}
            

                <section
                className="relative bg-[url(https://i.postimg.cc/hP6R4qg5/bg.jpg)] bg-cover bg-center bg-no-repeat"
                >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Let us find your

                        <strong className="block font-extrabold text-rose-700">
                        Forever Home.
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                        tenetur fuga ducimus numquam ea!
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                        href="#"
                        className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                        Get Started
                        </a>

                        <a
                        href="#"
                        className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                        Learn More
                        </a>
                    </div>
                    </div>
                </div>
                </section>
                </SwiperSlide>
                <SwiperSlide>
               
                <section
                className="relative bg-[url(https://i.postimg.cc/xdD1pz4g/pexels-tim-douglas-6567607.jpg)] bg-cover bg-center bg-no-repeat"
                >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Let us find your

                        <strong className="block font-extrabold text-rose-700">
                        Forever Home.
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                        tenetur fuga ducimus numquam ea!
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                        href="#"
                        className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                        Get Started
                        </a>

                        <a
                        href="#"
                        className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                        Learn More
                        </a>
                    </div>
                    </div>
                </div>
                </section>
                </SwiperSlide>
                <SwiperSlide>
                  
                <section
                className="relative bg-[url(https://i.postimg.cc/wBM3mpnY/pexels-tim-douglas-6567738.jpg)] bg-cover bg-center bg-no-repeat"
                >
                <div
                    className="absolute inset-0 bg-black/75 sm:bg-transparent sm:from-black/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Let us find your

                        <strong className="block font-extrabold text-rose-700">
                        Forever Home.
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                        tenetur fuga ducimus numquam ea!
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                        href="#"
                        className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                        Get Started
                        </a>

                        <a
                        href="#"
                        className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                        Learn More
                        </a>
                    </div>
                    </div>
                </div>
                </section>
                </SwiperSlide>
                
            </Swiper>  
        </div>
    );
};

export default Banner;