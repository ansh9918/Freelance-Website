import { FaRegEye, FaShoppingCart } from "react-icons/fa";
import model from "../assets/3dmodel.webp";
import grid1 from "../assets/grid1.jpeg";
import grid2 from "../assets/grid2.jpeg";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/locomotive-scroll.css"; // Import default styles

import Marquee2 from "../UI/Marquee2";
import { TbBrandReact } from "react-icons/tb";
import { AiOutlineMessage } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import Marquee3 from "../UI/Marquee3";
import Marquee4 from "../UI/Marquee4";

const Merch = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 1,
            class: "is-reveal",
        });

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    return (
        <section id="bg-photu">
            <div className="bg-black">
                <div className="my-7">
                    <div className="px-4 sm:px-6 lg:px-24 mx-4 sm:mx-6 lg:mx-24 max-h-screen">
                        <div className="flex flex-col-reverse justify-center items-center md:flex-row gap-5">
                            {/* Left content with heading, text, and button */}
                            <div className="md:w-full space-y-6 sm:space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
                                {/* Heading */}
                                <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-syne font-semibold text-white">
                                    Join the community with our{" "}
                                    <span className="relative whitespace-nowrap">
                                        first-ever tee!
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-current absolute text-orange-500 -bottom-2 left-0 right-0 w-full"
                                            viewBox="0 0 235.509 13.504"
                                            aria-hidden="true"
                                            preserveAspectRatio="none">
                                            <path d="M163,.383a13.044,13.044,0,0,1,1.517-.072,3.528,3.528,0,0,1,1.237-.134q.618.044,1.237.044a.249.249,0,0,1-.1.178.337.337,0,0,0-.1.266q3.092.088,6.184-.044T178.953.4l-.206-.088a12,12,0,0,0,4.123,0,13.467,13.467,0,0,1,5.772,0q1.443-.178,2.68-.266A5.978,5.978,0,0,1,193.8.4,16.707,16.707,0,0,1,198.01.045q2.164.088,4.844.088-.618.088-.824.134L201.412.4a3.893,3.893,0,0,0,2.061,0,5.413,5.413,0,0,1,1.649-.356q.618.088,1.134.178a9.762,9.762,0,0,0,1.544.09,17,17,0,0,1,3.092-.266q1.649,0,3.5.178,2.886.088,5.875.044t5.875-.222q0,.088.206.088h.412a21.975,21.975,0,0,0,2.577.889A12.458,12.458,0,0,1,232.12,2.18a3.962,3.962,0,0,1,1.031.622A3.349,3.349,0,0,1,234.8,3.825a5.079,5.079,0,0,1,.618,1.111q.412.534-1.031.98-1.031.444-.618.98a2.09,2.09,0,0,1,.206.889q0,.444.825.889.618.8-.206,1.245l-1.237.534q-1.443-.088-2.68-.134a17.255,17.255,0,0,1-2.267-.222,3.128,3.128,0,0,0-.928-.044,3.129,3.129,0,0,1-.928-.044q-2.267-.178-4.432-.266T217.7,9.476q-1.649-.088-2.886-.088a17.343,17.343,0,0,1-2.474-.178q-3.916,0-7.73-.088t-7.73-.266l-12.471-.178q-6.287-.088-12.883-.088h-1.958q-.928,0-1.958.088h-2.061q-1.031,0-2.061-.088-2.68-.088-5.256-.134t-5.256.044h-5.462q-2.577,0-5.462.088-4.535.088-8.76.178t-8.554.088q-2.886.088-5.875.088t-5.875.088q-1.443.088-2.886.134t-3.092.044q-4.741.178-9.791.312t-9.791.312q-2.267.088-4.329.088T78.77,10.1q-4.329.266-8.863.49t-9.276.49q-1.237.088-2.68.134a24.356,24.356,0,0,0-2.683.224q-2.68.178-5.462.312t-5.668.4q-2.474.266-4.741.312t-4.741.044q-1.031-.088-1.958-.134a9.684,9.684,0,0,1-1.958-.312,12.5,12.5,0,0,0-1.443-.312q-.825-.134-1.856-.31-2.886.356-6.39.666t-6.8.845a26.709,26.709,0,0,1-2.886.356,20.758,20.758,0,0,1-9.482-.889Q.232,11.962.026,11.25T1.263,9.917q0-.266.825-.266a13.039,13.039,0,0,0,2.886-.444A17.187,17.187,0,0,1,7.86,8.672q3.092-.266,6.184-.8,1.649-.178,3.3-.312t3.5-.312q4.123-.354,8.039-.712t8.039-.622q9.478-.8,18.758-1.338,2.68-.178,5.153-.356t4.741-.356q2.474-.178,5.05-.356T75.88,3.24h1.34a4.829,4.829,0,0,0,1.34-.178q2.267-.178,4.329-.222t4.329-.134a7.256,7.256,0,0,1,2.267,0,3.459,3.459,0,0,0,1.031-.088,6.009,6.009,0,0,1,2.37-.266,14.745,14.745,0,0,0,2.783-.088q1.649,0,2.474.088a1.308,1.308,0,0,1,.185.011,1.226,1.226,0,0,1,.33-.1,3.656,3.656,0,0,0,.515-.088,4.433,4.433,0,0,1,2.886.266q.412-.088,1.031-.178l1.237-.178q.412,0,1.031.044a5.761,5.761,0,0,0,1.237-.044q2.886-.088,5.772-.044a53.829,53.829,0,0,0,5.772-.222,9.505,9.505,0,0,1,1.34-.088h1.34a4.428,4.428,0,0,1,.821-.258l.825-.178a15.178,15.178,0,0,1,1.855.444,3.028,3.028,0,0,1,1.031-.534,4.039,4.039,0,0,1,1.443-.178,6.158,6.158,0,0,1,1.649.178,5.05,5.05,0,0,0,2.267.268q1.855-.088,3.813-.134T138.13,1.2q1.031,0,2.164-.044t2.37-.044q-.206-.088.412-.534h3.092q.412,0,.309.266t.928,0a5.845,5.845,0,0,1,1.443,0,31.833,31.833,0,0,0,5.359.088,21.471,21.471,0,0,1,6.8.178,5.236,5.236,0,0,0,1.031-.4q.412-.222.825-.4a.694.694,0,0,1,.137.07Z" />
                                        </svg>
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-sm sm:text-md text-gray-500">
                                    Clothing is more than just fabric. Its an
                                    extension of who you are. Our carefully
                                    crafted t-shirt is designed to showcase your
                                    personality and show who you are.
                                </p>

                                {/* Shop Now Button */}
                                <button className="text-white text-sm sm:text-md flex justify-center items-center mt-4 bg-orange-600 rounded-full p-3 sm:p-4 px-4 sm:px-6 gap-3 hover:bg-white hover:text-black duration-300">
                                    Shop Now <FaShoppingCart />
                                </button>
                            </div>

                            {/* Right image */}
                            <div className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[70%]">
                                <img
                                    src={model}
                                    alt="Model"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <Marquee2 />
                </div>
                <div ref={scrollRef} data-scroll-container>
                    <div
                        className="px-6 md:px-16 mx-6 md:mx-8 lg:mx-24 my-32"
                        data-scroll
                        data-scroll-speed=".3">
                        <div
                            className="text-white text-center font-syne text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed"
                            data-scroll
                            data-scroll-class="is-reveal">
                            Every purchase you make not only enhances your
                            wardrobe but also directly supports emerging
                            designers. By wearing this tee, you become a part of
                            a movement that encourages artistic expression and
                            creativity.
                        </div>
                    </div>
                </div>

                <div className="min-h-[200vh] grid grid-cols-1 lg:grid-cols-11 ">
                    {/* First Div */}
                    <div className="bg-white order-2 lg:order-1 col-span-6 h-screen ">
                        <div className="p-36 space-y-7">
                            <div className="font-syne font-bold text-2xl md:text-6xl">
                                Why Choose <br />
                                Our Tee?
                            </div>
                            <div>
                                <ul className="text-md font-semibold list-disc leading-loose pl-5">
                                    <li>
                                        Crafted with the finest materials, our
                                        t-shirt is built to last. It’s
                                        comfortable, breathable, and designed to
                                        withstand the test of time.
                                    </li>
                                    <li>
                                        Our design caters to all tastes,
                                        ensuring that you find the perfect fit
                                        for your unique style.
                                    </li>
                                </ul>
                            </div>
                            <button className="text-white text-md flex justify-center items-center mt-4 bg-orange-600 rounded-full p-5 px-6 gap-3 hover:bg-white hover:text-black duration-300">
                                Shop Now <FaShoppingCart />{" "}
                            </button>
                        </div>
                    </div>

                    {/* Second Div */}
                    <div className=" order-1 lg:order-2 col-span-5 h-screen ">
                        <img src={grid1} className="h-full w-full" alt="" />
                    </div>

                    {/* Third Div */}
                    <div className="order-3 col-span-5  h-screen ">
                        <img src={grid2} alt="" />
                    </div>

                    {/* Fourth Div */}
                    <div className="bg-white order-4 col-span-6 h-screen ">
                        <div className="p-36 space-y-7">
                            <h1 className="font-syne font-bold text-2xl md:text-6xl">
                                Are you ready to <br />
                                flaunt the tees?
                            </h1>
                            <div>
                                <p className="text-md font-semibold list-disc leading-loose">
                                    Join a network of like-minded individuals
                                    who value creativity, self-expression and
                                    supporting emerging talents.
                                </p>
                            </div>
                            <button className="text-white text-md flex justify-center items-center mt-4 bg-orange-600 rounded-full p-5 px-6 gap-3 hover:bg-white hover:text-black duration-300">
                                Shop Now <FaShoppingCart />{" "}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="my-7">
                    <div className="border-b-[1px] border-gray-500">
                        <h1 className="text-3xl md:text-4xl text-white text-center p-6 md:p-12 font-semibold font-syne">
                            Revolutionary Design
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-white p-6 md:p-16 font-syne">
                        <div className="flex flex-col justify-center items-center text-center space-y-3">
                            <TbBrandReact className=" p-2 h-[40px] w-[40px] md:h-[52px] md:w-[52px] rounded-full border-2 border-gray-500 hover:text-orange-600 hover:border-orange-600 duration-300" />
                            <p className="text-lg md:text-xl font-bold">
                                Generous Fit
                            </p>
                            <p className="text-sm md:text-md text-gray-500">
                                Maximum comfort with its roomy and relaxed fit,
                                providing ample space for unrestricted movement.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center space-y-3">
                            <AiOutlineMessage className=" p-2 h-[40px] w-[40px] md:h-[52px] md:w-[52px] rounded-full border-2 border-gray-500 hover:text-orange-600 hover:border-orange-600 duration-300" />
                            <p className="text-lg md:text-xl font-bold">
                                Generous Fit
                            </p>
                            <p className="text-sm md:text-md text-gray-500">
                                Maximum comfort with its roomy and relaxed fit,
                                providing ample space for unrestricted movement.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center space-y-3">
                            <FaCartShopping className=" p-2 h-[40px] w-[40px] md:h-[52px] md:w-[52px] rounded-full border-2 border-gray-500 hover:text-orange-600 hover:border-orange-600 duration-300" />
                            <p className="text-lg md:text-xl font-bold">
                                Generous Fit
                            </p>
                            <p className="text-sm md:text-md text-gray-500">
                                Maximum comfort with its roomy and relaxed fit,
                                providing ample space for unrestricted movement.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center space-y-3">
                            <FaRegEye className=" p-2 h-[40px] w-[40px] md:h-[52px] md:w-[52px] rounded-full border-2 border-gray-500 hover:text-orange-600 hover:border-orange-600 duration-300" />
                            <p className="text-lg md:text-xl font-bold">
                                Generous Fit
                            </p>
                            <p className="text-sm md:text-md text-gray-500">
                                Maximum comfort with its roomy and relaxed fit,
                                providing ample space for unrestricted movement.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full w-full my-10 py-48 bg-transparent text-7xl text-white font-bold font-syne flex justify-center items-center">
                Comfy & Easy
            </div>
            <div>
                <div className="bg-black">
                    <Marquee3 />
                </div>
                <div className="bg-black">
                    <Marquee4 />
                </div>
            </div>
        </section>
    );
};

export default Merch;
