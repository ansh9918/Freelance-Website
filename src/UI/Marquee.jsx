
import asset1 from '../assets/marquee/Asset-1.png'
import asset2 from '../assets/marquee/Asset-2.png'
import asset4 from '../assets/marquee/Asset-4.png'
import asset5 from '../assets/marquee/Asset-5.png'
import asset6 from '../assets/marquee/Asset-6.png'
import asset7 from '../assets/marquee/Asset-7.png'
import asset8 from '../assets/marquee/Asset-8.png'
import asset9 from '../assets/marquee/Asset-9.png'
import asset10 from '../assets/marquee/Asset-10.png'
import asset11 from '../assets/marquee/Asset-11.png'
import asset12 from '../assets/marquee/Asset-12.png'
import asset13 from '../assets/marquee/Asset-13.png'
import asset14 from '../assets/marquee/Asset-14.png'
import asset15 from '../assets/marquee/Asset-15.png'
import asset16 from '../assets/marquee/Asset-16.png'
import asset17 from '../assets/marquee/Asset-17.png'
import asset18 from '../assets/marquee/Asset-18.png'
import asset19 from '../assets/marquee/Asset-19.png'
import asset20 from '../assets/marquee/Asset-20.png'
import asset21 from '../assets/marquee/Asset-21.png'
import asset23 from '../assets/marquee/Asset-23.png'
import asset24 from '../assets/marquee/Asset-24.png'
import asset25 from '../assets/marquee/Asset-25.png'
import asset26 from '../assets/marquee/Asset-26.png'
import asset27 from '../assets/marquee/Asset-27.png'
import asset28 from '../assets/marquee/Asset-28.png'
import asset29 from '../assets/marquee/Asset-29.png'
import asset30 from '../assets/marquee/Asset-30.png'
import asset31 from '../assets/marquee/Asset-31.png'
import asset32 from '../assets/marquee/Asset-32.png'
import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
    const upperMarquee = [
        asset1,asset2,asset4,asset5,asset6,asset7,asset8,asset9,asset10,asset11,asset12,asset13,asset14,asset15,asset16,asset17,asset18,asset19,asset20,asset21,asset23,asset24,asset25,asset26,asset27,asset28,asset29,asset30,asset31,asset32
    ];

    const lowerMarquee = [
        asset1,asset2,asset4,asset5,asset6,asset7,asset8,asset9,asset10,asset11,asset12,asset13,asset14,asset15,asset16,asset17,asset18,asset19,asset20,asset21,asset23,asset24,asset25,asset26,asset27,asset28,asset29,asset30,asset31,asset32
    ];

    return (
        <div className=" space-y-16 my-20">
            <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
            <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
        </div>
    );
};

export default Marquee;