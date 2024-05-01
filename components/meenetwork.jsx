
const Meenetwork = ({ page }) => {

    const pageCheck = (page) => {
        return (
            <>
                <div className="container mx-auto py-10 md:py-20">
                    <div className="md:pt-10">
                        <div className="flex justify-center">
                            <div className="banner-bg  md:rounded-[0px] w-[327px] h-[486px] md:w-[1200px] flex flex-col justify-end">

                            </div>
                        </div>
                        <div className=" justify-center">
                            <div className="flex justify-center">
                                <div className="flex items-center">
                                    <span className="span-line"></span>
                                    <span className="span-small-ball"></span>
                                    <span className="span-big-ball"></span>
                                    <h3 className="header-text">ABOUT MEE</h3>
                                    <span className="span-big-ball"></span>
                                    <span className="span-small-ball"></span>
                                    <span className="span-line"></span>
                                </div>
                            </div>

                            <p className="m-5  text-[11px] md:text-[18px] mee-text-p" style={{textAlign:'start', paddingLeft:'30px'}}>
                                Mee Games is an innovative blockchain gaming platform designed to revolutionize the digital entertainment landscape. By integrating cross-chain technology, Mee Games allows gamers to seamlessly use and transfer their digital assets across various games and blockchain networks, enhancing asset utility and player engagement.
                            </p>
                            <p className="m-5  text-[11px] md:text-[18px] mee-text-p" style={{textAlign:'start', paddingLeft:'30px'}}>
                                The platform offers a robust ecosystem that supports game developers through easy integration tools, access to a built-in  audience, and multiple monetization avenues, including a dynamic NFT marketplace. For investors, Mee Games represents a cutting-edge opportunity in the growing intersection of gaming and decentralized finance, promising both growth and scalability in a thriving market.
                            </p>
                            <div className="gameRoom  md:rounded-[0px] w-[327px] h-[486px] md:w-[1200px] flex flex-col justify-end">
                            </div>
                        </div>
                        
                    </div>
                </div>
                <style jsx>{`
            .gameRoom {
                background-image: url("/gameroom.png");
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
            }
            .banner-bg {
                background-image: url("/banner.png");
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
            }
            .span-line, .span-small-ball, .span-big-ball {
                display: inline-block; /* Allows setting width and height */
                vertical-align: middle; /* Aligns the items vertically in the center if necessary */
            }
            
            .span-line {
                width: 177px;
                height: 1px;
                background: linear-gradient(90deg, #FFFFFF 29.35%, rgba(255, 255, 255, 0) 97.73%);
                margin: 0 5px; /* Add margin to separate from balls */
            }
            
            .span-small-ball {
                width: 8px;
                height: 8px;
                border-radius: 50%; /* Makes it a circle */
                background: #FFFFFF;
                margin: 0 5px; /* Add margin to separate from line and text */
            }
            
            .span-big-ball {
                width: 16px;
                height: 16px;
                border-radius: 50%; /* Makes it a circle */
                background: #FFFFFF;
                margin: 0 5px; /* Add margin to separate from line and text */
            }
            
            .header-text {
                color: #FFFFA0; /* Adjusted color code */
                margin: 0 10px; /* Ensures text is properly spaced */
            }

            .h3 {
                color: gray;
                // font-size: 1.5em;
                text-align: center;
                margin-top: 10px;
            }
            

            `}</style>
            </>
        )
    }
    return (
        (pageCheck(page))
    )
}

export default Meenetwork;