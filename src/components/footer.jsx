import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return (
        <>
            <div className="footerDiv container mx-auto text-white flex flex-col">
                <div className="flex justify-center">
                    <div className="  md:rounded-[0px] w-[327px] h-[486px] md:w-[1200px] flex flex-col justify-end">
                    <img src="/gameover.png" alt="Game Room" className="gameRoomImage" />

                    </div>
                </div>
                <div className="flex flex-col space-y-10 md:mx-48 py-10">
                    <div className="flex flex-col md:flex-row justify-around items-center space-y-10 md:space-y-0">

                        <div className="logo">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={80}
                                height={80}
                                className="logo"
                            />
                        </div>
                        <div className="flex flex-row">
                            <nav className="footer-nav">
                                <ul>
                                    <li><a href="#about">About Mee</a></li>
                                    <li><a href="#deck">Mee Deck</a></li>
                                    <li><a href="#whitepaper">Whitepaper</a></li>
                                </ul>
                            </nav>
                            <nav className="footer-nav">
                                <ul>
                                    <li><a href="#features">Mee features</a></li>
                                    <li><a href="#tokenomics">Tokenomics</a></li>
                                    <li><a href="#roadmap">Roadmap</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="flex flex-col">
                            <div className="newsletter">
                                <input type="email" placeholder="Enter your email" />
                                <button>Subscribe</button>
                            </div>
                            <div className="social-icons">
                                <span>X</span>
                                <span>😊</span>
                                <span>🔔</span>
                                <span>✈️</span>
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

        </>
    )
}

export default Footer;