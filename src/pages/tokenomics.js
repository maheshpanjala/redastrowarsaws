import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Tokenomics from "../components/tokenomics";
import Head from "next/head";

const TokenomicsPage = () => {
    return (
        <>
            <div className="bg-black main-container" >
                <Navbar />
                <Tokenomics />
                <Footer />
            </div>
        </>
    );
};

export default TokenomicsPage;
