
import img2 from '../assets/2.jpeg'
import img3 from '../assets/3.jpeg'
import img4 from '../assets/4.jpeg'
import img5 from '../assets/5.jpeg'
import img6 from '../assets/6.jpeg'

import MarqueeItem2 from "./MarqueeItem2";

const Marquee2 = () => {
    const upperMarquee = [
        img2, img3, img4, img5, img6, img2, img3, img4, img5, img6, img2, img3, img4, img5, img6
    ];

    return (
        <div className="my-20">
            <MarqueeItem2 images={upperMarquee} from={0} to={"-100%"} />
        </div>
    );
};

export default Marquee2;