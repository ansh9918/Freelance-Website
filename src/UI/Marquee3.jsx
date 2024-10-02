import MarqueeItem3 from "./MarqueeItem3";
import MarqueeItem5 from "./MarqueeItem5";

const Marquee3 = () => {
    const upperMarquee = [
        "High quality",
        "High quality",
        "High quality",
        "High quality",
        "High quality",
        "High quality",
        "High quality",
        "High quality",
        "High quality",
        "High quality",
        "High quality",
    ];

    const lowerMarquee = [
        "Versatile styling",
        "Versatile styling",
        "Versatile styling",
        "Versatile styling",
        "Versatile styling",
        "Versatile styling",
        "Versatile styling",
        "Versatile styling",
        "Versatile styling",
        "Versatile styling",
        
    ];

    return (
        <div className=" space-y-16">
            <MarqueeItem3 texts={upperMarquee} from={0} to={"-100%"} />
            <MarqueeItem5 texts={lowerMarquee} from={"-100%"} to={0} />
        </div>
    );
};

export default Marquee3;