import Avatar from "../assets/Frame-2608180-1.png";
import Avatar2 from "../assets/avatar2.jpeg";
import Avatar3 from "../assets/avatar3.png";
import Avatar4 from "../assets/avatar4.jpg";
import Marquee from "../UI/Marquee";
import video1 from "../assets/DZINR.mp4";
import video2 from "../assets/DZINR2.webm";
import video3 from "../assets/DZINR3.mp4";
import video4 from "../assets/DZINR4.mp4";
import { FiArrowDownRight } from "react-icons/fi";
import { FaDropbox, FaInstagram, FaPenNib } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { RiMailOpenLine } from "react-icons/ri";

const Home = () => {
    const projects = [
        {
            title: "House of X",
            description: `A one-stop solution for creators and celebrities to create and empower best-in-class brands of the future. 
          They are on a mission to build a house of brands that cater to the future generation, i.e. GenZ.`,
            tags: ["Logo Design", "Brand Identity"],
            videoSrc: video2, // Replace with actual video URL or import
            avatarSrc: Avatar2, // Replace with actual avatar image URL or import
            owner: "Raj Sharma", // Replace with actual Instagram handle
        },
        {
            title: "Maninder Buttar",
            description: `Maninder Buttar is a Punjab-based singer-songwriter who found fame in Indias pop scene by mixing modern electronic, hip-hop and traditional Punjabi instrumentation and vocals. Maninders song Sakhiyan was a huge hit with 584M+ views on YouTube.`,
            tags: ["Web Development", "UI/UX Design"],
            videoSrc: video3, // Replace with actual video URL or import
            avatarSrc: Avatar3, // Replace with actual avatar image URL or import
            owner: "Maninder Buttar", // Replace with actual Instagram handle
        },
        {
            title: "Indian Farmer",
            description: `One-stop solution for farmers to learn modern-day techniques and explore a whole new world of farming to get better produce eventually. They are on a mission to shatter stereotypes, transform people’s perspective towards farming and provide solutions for real-world problems. `,
            tags: ["Brand Strategy", "Creative Direction"],
            videoSrc: video4, // Replace with actual video URL or import
            avatarSrc: Avatar4, // Replace with actual avatar image URL or import
            owner: "Indian Farmer", // Replace with actual Instagram handle
        },
    ];

    return (
        <section className="bg-black my-7">
            <div className="px-6 md:px-20">
                <div className="relative flex flex-col items-center justify-center">
                    <img
                        src={Avatar}
                        alt="avatar"
                        className="w-full h-full md:h-[40%] md:w-[40%]"
                    />

                    <h1 className="absolute top-[60%] z-10 text-center text-white font-bold font-syne tracking-tighter text-2xl sm:text-4xl md:text-6xl leading-relaxed">
                        We craft purposeful <br /> brand identities and <br />{" "}
                        effective logos
                    </h1>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current -translate-y-8 text-orange-500 w-[50%] h-[50%] md:w-[40%] md:h-[40%]"
                        viewBox="0 0 235.509 13.504"
                        aria-hidden="true"
                        preserveAspectRatio="none">
                        <path d="M163,.383a13.044,13.044,0,0,1,1.517-.072,3.528,3.528,0,0,1,1.237-.134q.618.044,1.237.044a.249.249,0,0,1-.1.178.337.337,0,0,0-.1.266q3.092.088,6.184-.044T178.953.4l-.206-.088a12,12,0,0,0,4.123,0,13.467,13.467,0,0,1,5.772,0q1.443-.178,2.68-.266A5.978,5.978,0,0,1,193.8.4,16.707,16.707,0,0,1,198.01.045q2.164.088,4.844.088-.618.088-.824.134L201.412.4a3.893,3.893,0,0,0,2.061,0,5.413,5.413,0,0,1,1.649-.356q.618.088,1.134.178a9.762,9.762,0,0,0,1.544.09,17,17,0,0,1,3.092-.266q1.649,0,3.5.178,2.886.088,5.875.044t5.875-.222q0,.088.206.088h.412a21.975,21.975,0,0,0,2.577.889A12.458,12.458,0,0,1,232.12,2.18a3.962,3.962,0,0,1,1.031.622A3.349,3.349,0,0,1,234.8,3.825a5.079,5.079,0,0,1,.618,1.111q.412.534-1.031.98-1.031.444-.618.98a2.09,2.09,0,0,1,.206.889q0,.444.825.889.618.8-.206,1.245l-1.237.534q-1.443-.088-2.68-.134a17.255,17.255,0,0,1-2.267-.222,3.128,3.128,0,0,0-.928-.044,3.129,3.129,0,0,1-.928-.044q-2.267-.178-4.432-.266T217.7,9.476q-1.649-.088-2.886-.088a17.343,17.343,0,0,1-2.474-.178q-3.916,0-7.73-.088t-7.73-.266l-12.471-.178q-6.287-.088-12.883-.088h-1.958q-.928,0-1.958.088h-2.061q-1.031,0-2.061-.088-2.68-.088-5.256-.134t-5.256.044h-5.462q-2.577,0-5.462.088-4.535.088-8.76.178t-8.554.088q-2.886.088-5.875.088t-5.875.088q-1.443.088-2.886.134t-3.092.044q-4.741.178-9.791.312t-9.791.312q-2.267.088-4.329.088T78.77,10.1q-4.329.266-8.863.49t-9.276.49q-1.237.088-2.68.134a24.356,24.356,0,0,0-2.683.224q-2.68.178-5.462.312t-5.668.4q-2.474.266-4.741.312t-4.741.044q-1.031-.088-1.958-.134a9.684,9.684,0,0,1-1.958-.312,12.5,12.5,0,0,0-1.443-.312q-.825-.134-1.856-.31-2.886.356-6.39.666t-6.8.845a26.709,26.709,0,0,1-2.886.356,20.758,20.758,0,0,1-9.482-.889Q.232,11.962.026,11.25T1.263,9.917q0-.266.825-.266a13.039,13.039,0,0,0,2.886-.444A17.187,17.187,0,0,1,7.86,8.672q3.092-.266,6.184-.8,1.649-.178,3.3-.312t3.5-.312q4.123-.354,8.039-.712t8.039-.622q9.478-.8,18.758-1.338,2.68-.178,5.153-.356t4.741-.356q2.474-.178,5.05-.356T75.88,3.24h1.34a4.829,4.829,0,0,0,1.34-.178q2.267-.178,4.329-.222t4.329-.134a7.256,7.256,0,0,1,2.267,0,3.459,3.459,0,0,0,1.031-.088,6.009,6.009,0,0,1,2.37-.266,14.745,14.745,0,0,0,2.783-.088q1.649,0,2.474.088a1.308,1.308,0,0,1,.185.011,1.226,1.226,0,0,1,.33-.1,3.656,3.656,0,0,0,.515-.088,4.433,4.433,0,0,1,2.886.266q.412-.088,1.031-.178l1.237-.178q.412,0,1.031.044a5.761,5.761,0,0,0,1.237-.044q2.886-.088,5.772-.044a53.829,53.829,0,0,0,5.772-.222,9.505,9.505,0,0,1,1.34-.088h1.34a4.428,4.428,0,0,1,.821-.258l.825-.178a15.178,15.178,0,0,1,1.855.444,3.028,3.028,0,0,1,1.031-.534,4.039,4.039,0,0,1,1.443-.178,6.158,6.158,0,0,1,1.649.178,5.05,5.05,0,0,0,2.267.268q1.855-.088,3.813-.134T138.13,1.2q1.031,0,2.164-.044t2.37-.044q-.206-.088.412-.534h3.092q.412,0,.309.266t.928,0a5.845,5.845,0,0,1,1.443,0,31.833,31.833,0,0,0,5.359.088,21.471,21.471,0,0,1,6.8.178,5.236,5.236,0,0,0,1.031-.4q.412-.222.825-.4a.694.694,0,0,1,.137.07Z" />
                    </svg>
                </div>

                <div className="mt-3 text-center text-gray-400 text-xl">
                    Transform your ideas into reality to get impactful and
                    unforgettable branding solutions.
                </div>

                <div className="mt-7 flex justify-center gap-4 sm:gap-8">
                    <button className="rounded-md p-2 sm:p-3 px-4 sm:px-8 font-semibold text-white bg-orange-600">
                        Schedule a call
                    </button>
                    <button className="rounded-md p-2 sm:p-3 px-4 sm:px-8 border-2 border-white text-white hover:bg-white hover:text-black duration-300">
                        Our work
                    </button>
                </div>

                <div className="my-24">
                    <Marquee />
                </div>

                <div className="my-36 px-6 lg:px-16 mx-6 lg:mx-16">
                    <div className="flex flex-col items-center space-y-12 lg:space-y-24">
                        <h1 className="text-white font-syne text-3xl md:text-6xl leading-loose tracking-tight sm:text-center border-l-4 sm:border-none border-white px-4">
                            Where innovation meets artistry! <br />
                            Our design agency is dedicated to crafting bespoke,
                            unforgettable visual experiences for brands that
                            dare to stand out.
                        </h1>
                        <video
                            src={video1}
                            className="rounded-2xl"
                            muted
                            autoPlay
                            loop
                            playsInline></video>
                    </div>
                </div>

                <div className="px-6 lg:px-16 mx-6 lg:mx-16">
                    <div className="flex flex-col items-center">
                        <div className="flex items-start gap-5">
                            <h1 className="text-white font-syne text-3xl md:text-6xl font-bold">
                                Our Projects
                            </h1>
                            <FiArrowDownRight className="text-white text-5xl md:text-7xl" />
                        </div>

                        {/* Project Cards */}
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="my-10 border-2 border-gray-500 bg-[#161616] rounded-2xl py-8 px-6 lg:px-8">
                                <h1 className="text-white font-syne text-3xl md:text-5xl font-semibold">
                                    {project.title}
                                </h1>
                                <div className="flex gap-3 my-3">
                                    {project.tags.map((tag, tagIndex) => (
                                        <div
                                            key={tagIndex}
                                            className="bg-[#323232] text-white rounded-lg p-1 px-4">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col lg:flex-row gap-3">
                                    <div className="text-white text-md max-w-[70%]">
                                        {project.description}
                                    </div>
                                    <div className="text-white border-2 border-white rounded-lg p-2 px-5 lg:ml-16 h-12">
                                        More about the project
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-6 mt-9">
                                    <video
                                        src={project.videoSrc}
                                        className="w-full lg:w-2/3 rounded-2xl"
                                        muted
                                        autoPlay
                                        loop
                                        playsInline></video>
                                    <div className="flex flex-col items-center gap-6 w-full lg:w-1/3">
                                        <img
                                            src={project.avatarSrc}
                                            className="w-[90%] rounded-2xl"
                                            alt=""
                                        />
                                        <div className="flex items-center gap-6">
                                            <FaInstagram className="text-white text-3xl" />
                                            <span className="text-white font-syne font-semibold text-3xl">
                                                {project.owner}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="px-4 md:px-20 mx-auto md:mx-16 my-20">
                <div className="flex flex-col md:flex-row md:gap-5 justify-between items-center">
                    <div className="flex items-start justify-center gap-5 md:w-1/3">
                        <h2 className="text-white font-syne text-4xl md:text-6xl font-bold">
                            Our Services
                        </h2>
                        <FiArrowDownRight className="text-white text-6xl md:text-9xl" />
                    </div>

                    <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 md:p-8">
                        <div className="p-6 space-y-3 border bg-[#090909] border-gray-800 hover:border-orange-600 duration-300 rounded-lg">
                            <FaPenNib className="text-orange-600 p-2 h-12 w-12 rounded-full bg-white" />
                            <h1 className="text-white text-xl">
                                Logo Designing
                            </h1>
                            <p className="text-white">
                                Transform your brand vision into a captivating
                                masterpiece that speaks volumes with just a
                                glance. Let your logo do the talking, while you
                                do the business!
                            </p>
                        </div>

                        <div className="p-6 space-y-3 border bg-[#090909] border-gray-800 hover:border-orange-600 duration-300 rounded-lg">
                            <IoDiamondOutline className="text-orange-600 p-2 h-12 w-12 rounded-full bg-white" />
                            <h1 className="text-white text-xl">
                                Creative Branding
                            </h1>
                            <p className="text-white">
                                Build a creative brand identity that stands out
                                and captivates your audience, ensuring lasting
                                impressions.
                            </p>
                        </div>

                        <div className="p-6 space-y-3 border bg-[#090909] border-gray-800 hover:border-orange-600 duration-300 rounded-lg">
                            <RiMailOpenLine className="text-orange-600 p-2 h-12 w-12 rounded-full bg-white" />
                            <h1 className="text-white text-xl">
                                Marketing Strategies
                            </h1>
                            <p className="text-white">
                                Get tailored marketing strategies that drive
                                engagement and help you reach your business
                                goals effectively.
                            </p>
                        </div>

                        <div className="p-6 space-y-3 border bg-[#090909] border-gray-800 hover:border-orange-600 duration-300 rounded-lg">
                            <FaDropbox className="text-orange-600 p-2 h-12 w-12 rounded-full bg-white" />
                            <h1 className="text-white text-xl">
                                Product Packaging
                            </h1>
                            <p className="text-white">
                                Design and develop unique product packaging that
                                not only protects but also markets your product
                                beautifully.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
