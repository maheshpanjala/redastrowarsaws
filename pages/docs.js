import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Docs from "../components/docs";
import Head from "next/head";

const DocsPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=1024" />
            </Head>
            <div className="bg-black">
                <Navbar /> 
                <div className="absolute leftright bottom-10 mx-auto left-1/2 flex justify-center mx-auto items-center">
            </div>
                <Docs page="docs" />
                <Footer />
            </div>
        </>
    );
};

export default DocsPage;
