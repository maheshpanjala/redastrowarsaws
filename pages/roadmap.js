import RoadMap from "../components/roadmap.jsx";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";

const RoadMapPage = () => {
    return (
        <>
            <div className="bg-black main-container">
                <Navbar />
                <RoadMap page="roadmap" />
                <Footer />
            </div>
        </>
    );
};

export default RoadMapPage;
