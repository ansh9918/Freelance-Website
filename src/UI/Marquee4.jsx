import MarqueeItem4 from "./MarqueeItem4";

const Marquee4 = () => {
    const upperMarquee = [
        "* Design is where science and art break even",
        "* Design is where science and art break even",
        "* Design is where science and art break even",
        "* Design is where science and art break even",
        "* Design is where science and art break even",
        "* Design is where science and art break even",
        "* Design is where science and art break even",
        "* Design is where science and art break even",
        "* Design is where science and art break even",
        "* Design is where science and art break even",
        "* Design is where science and art break even",
    ];

    return (
        <div className=" p-6 bg-orange-600">
            <MarqueeItem4 texts={upperMarquee} from={0} to={"-100%"} />
        </div>
    );
};

export default Marquee4;
