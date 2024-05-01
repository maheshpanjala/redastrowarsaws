import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MeeNetwork from "../components/meenetwork";
import Head from "next/head";

const Meenetwork = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=1024" />
            </Head>
            <div className="bg-black main-container" >
                <Navbar />
                <MeeNetwork page="meenetwork" />
                <Footer />
            </div>
        </>
    );
};

export default Meenetwork;
