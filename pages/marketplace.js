import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MarketPlace from "../components/marketplace";
import Image from "next/image";
import Head from "next/head";

const Marketplace = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=1024" />
            </Head>
            <div className="bg-black py-28 main-container">
                <Navbar />
                <MarketPlace />
                <div className="container mx-auto flex justify-center items-center">
                    <div className="rawFrame relative flex flex-row justify-between w-[1000px] h-[1020px] -mt-20">
                        <div className="flex flex-col space-y-24 mt-36 pl-24 pt-24 w-2/3">
                            <div className="w-full space-y-7 flex flex-col items-start">
                                <div className="flex flex-col w-full items-start w-1/2">
                                    <Image
                                        src="/marketplace/rawToken.svg"
                                        alt="Raw Token"
                                        width={221}
                                        height={80}
                                    />
                                </div>
                                <p className="text-left text-white text-xl">
                                    The in-game currency of the MartianVerse can
                                    be acquired by winning in the Battle Arena
                                    or Rover Racing, staking your $RAW,
                                    looting the RedBox or trading in the
                                    MarketPlace.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="absolute -right-0 top-[250px]">
                                <Image
                                    src="/marketplace/rawTokenCardImg.svg"
                                    alt="enhanced humans"
                                    width={550}
                                    height={650}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            
        </>
    );
};

export default Marketplace;
