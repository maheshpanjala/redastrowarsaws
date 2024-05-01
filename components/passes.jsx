
const Passes = ({ page }) => {

    const pageCheck = (page) => {
        return (
            <>
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div className="flex items-center">
                            <span className="span-line"></span>
                            <span className="span-small-ball"></span>
                            <span className="span-big-ball"></span>
                            <h3 className="header-text">Interoperable Gaming Platform</h3>
                            <span className="span-big-ball"></span>
                            <span className="span-small-ball"></span>
                            <span className="span-line"></span>
                        </div>
                    </div>
                    <div className="flex h-[40px]"></div>
                    <div className="interoperable-bg  md:rounded-[0px] w-[327px] h-[486px] md:w-[1200px]  flex flex-col justify-end">
                    </div>
                    <div className="flex h-[100px]"></div>
                    <div className="flex justify-center">
                        <div className="flex items-center">
                            <span className="span-line"></span>
                            <span className="span-small-ball"></span>
                            <span className="span-big-ball"></span>
                            <h3 className="header-text">TOKENOMICS</h3>
                            <span className="span-big-ball"></span>
                            <span className="span-small-ball"></span>
                            <span className="span-line"></span>
                        </div>
                    </div>
                    <div className="tokenomics-bg  md:rounded-[0px] w-[327px] h-[486px] md:w-[1200px] flex flex-col justify-end">
                    </div>
                    <div className="flex h-[40px]"></div>

                    <div className="flex justify-center">
                        <div className="flex items-center">
                            <span className="span-line"></span>
                            <span className="span-small-ball"></span>
                            <span className="span-big-ball"></span>
                            <h3 className="header-text">ROADMAP</h3>
                            <span className="span-big-ball"></span>
                            <span className="span-small-ball"></span>
                            <span className="span-line"></span>
                        </div>
                    </div>
                    <div className="flex h-[40px]"></div>

                    <div className="roadmap-bg  md:rounded-[0px] w-[327px] h-[486px] md:w-[1200px]  flex flex-col justify-end">
                    </div>
                </div>
                <style jsx>{`
            .interoperable-bg {
                background-image: url("/interoperable.png");
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
            }
            .tokenomics-bg{
                background-image: url("/tokenomics.png");
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
            }
            .roadmap-bg{
                background-image: url("/meroadmap.png");
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
            }
            `}</style>
            </>
        )
    }
    return (
        (pageCheck(page))
    )
}

export default Passes;