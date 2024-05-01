import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return (
        <>
            <div className="footerDiv container mx-auto text-white flex flex-col">
                <div className="flex justify-center">
                    <div className="gameover  md:rounded-[0px] w-[327px] h-[486px] md:w-[1200px] flex flex-col justify-end">
                    </div>
                </div>
                <div className="flex flex-col space-y-10 md:mx-48 py-10">
                    <div className="flex flex-col md:flex-row justify-around items-center space-y-10 md:space-y-0">

                        <div>
                            <Link href="/" passHref>
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={80}
                                    height={80}
                                    className="logo"
                                />
                            </Link>
                        </div>
                        <div style={{ display: "flex", flexDirection: 'column' }}>
                            <Link href="/support">
                                About Mee
                            </Link>
                            <Link href="/support">
                                Mee Deck
                            </Link>
                            <Link href="/support">
                                Whitepaper
                            </Link>
                        </div>
                        <div style={{ display: "flex", flexDirection: 'column' }}>
                            <Link href="/about">
                                Mee features
                            </Link>
                            <Link href="/support">
                                Tokenomics
                            </Link>
                            <Link href="/support">
                                Roadmap
                            </Link>
                        </div>
                        <div>
                            <div><button style={{
                                height: '40px',
                                padding: '5px 10px 5px 10px',
                                borderRadius: '46px',
                                border: '1px solid #FFFFFF'
                            }}>Enter your email</button>
                                <button style={{
                                    height: '40px',
                                    padding: '5px 10px 5px 10px',
                                    borderRadius: '46px',
                                    border: '1px solid #FFFFFF'
                                }}>Subscribe</button></div>

                            <div>

                            </div>

                        </div>
                    </div>
                    <div className="mx-auto">
                        <p> Copyright © 2024</p>
                    </div>
                    <div className="text-gray-500 text-center text-[14px] md:text-[24px]">
                        Privacy Policy | Terms & Conditions
                    </div>
                </div>

            </div>
             <style jsx>{`
            .gameover {
                background-image: url("/gameover.png");
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
            }
            `}</style> 
        </>
    )
}

export default Footer;