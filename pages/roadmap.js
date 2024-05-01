import RoadMap from "../components/roadmap.jsx";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";

const RoadMapPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=1024" />
            </Head>
            <div className="bg-black">
                <Navbar />
                <RoadMap page="roadmap" />
                <Footer />
            </div>
        </>
    );
};

export default RoadMapPage;
