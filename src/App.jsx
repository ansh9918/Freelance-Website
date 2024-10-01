import { Outlet } from "react-router";
import Header from "./Components/Header";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./Components/Footer";
function App() {
    return (
        <div>
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: "orange",
                }}
                outerStyle={{
                    border: "3px solid orange",
                }}
            />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
