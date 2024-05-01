import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Tokenomics from "../components/tokenomics";
import Head from "next/head";

const TokenomicsPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=1024" />
            </Head>
            <div className="bg-black">
                <Navbar />
                <Tokenomics />
                <Footer />
            </div>
        </>
    );
};

export default TokenomicsPage;
