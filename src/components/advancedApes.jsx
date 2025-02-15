import Image from "next/image"
import MeeArena from "../../public/meearena.png"
import MarketPlace from "../../public/marketplace.png"
import QuestMee from "../../public/questmee.png"
import Farming from "../../public/farming.png"
import Telegram from "../../public/telegram.png"


const AdvancedApes = ({ page }) => {
    
    const pageCheck = (page) => {
        return (
            <>
            <div className="container mx-auto  md:flex flex-row justify-between">
                    <div className="flex flex-col items-center w-full md:w-1/3">
                    <div className="text-center " style={{width: 100,height: 100,color: '#FFFFA0'}}>
                    MEE ARENA
                        </div>
                    </div>
                    
                    <div className="flex flex-col justify-center w-full md:w-1/7">
                        <div className="text-center" style={{minWidth: 205,maxWidth:800,height: 100,color: '#FFFFA0'}}>
                        Mee is the gaming aggregator with a chain agnostic feature where we bring the unity for gamers with our crosschain solutions.
                        </div>
                    </div>
                </div>
                <div className="container mx-auto  md:flex flex-row justify-between">
                    <div className="flex flex-col items-center w-full md:w-1/3">
                        <div className="mb-4">
                            <Image
                                src={MeeArena}
                                alt="Mee Arena"
                                width={623}
                                height={450}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full md:w-1/3">
                        <div className="text-center" style={{width: 205,height: 254,color: '#FFFFA0'}}>
                            Mee Gamer ID
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full md:w-1/3">
                        <div className="text-center" style={{minWidth: 205,maxWidth:400,height: 254,color: '#FFFFA0'}}>
                            Restore a long forgotten forest farm to its former glory, <br />
                            grow crops and create an enchanting home for yourself and your Chumbi.
                        </div>
                    </div>
                </div>
                <div className="container mx-auto  md:flex flex-row justify-between">
                    <div className="flex flex-col items-center w-full md:w-1/3">
                        <div className="mb-4">
                            <Image
                                src={MarketPlace}
                                alt="Market Place"
                                width={450}
                                height={618}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full md:w-1/3">
                        <div className="text-center " style={{width: 205,height: 254,color: '#FFFFA0'}}>
                            Mee Marketplace
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full md:w-1/3">
                        <div className="text-center" style={{minWidth: 205,maxWidth:400,height: 254,color: '#FFFFA0'}}>
                            Accompany your Chumbi to
                            the sacred Primordial Tree
                            to begin breeding new
                            Chumbi NFTs. <br />An endless
                            combination of attributes is
                            possible. Will you hatch
                            them all?
                        </div>
                    </div>
                </div>
                <div className="container mx-auto  md:flex flex-row justify-between">
                    <div className="flex flex-col items-center w-full md:w-1/3">
                        <div className="mb-4">
                            <Image
                                src={QuestMee}
                                alt="QuestMee"
                                width={623}
                                height={402}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full md:w-1/3">
                        <div className="text-center " style={{width: 205,height: 254,color: '#FFFFA0'}}>
                            Quest Mee
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full md:w-1/3">
                        <div className="text-center" style={{minWidth: 205,maxWidth:400,height: 254,color: '#FFFFA0'}}>
                            Combine your farm-grown
                            crops with the treasured
                            resources you find along
                            your travels to craft useful
                            and powerful items.
                        </div>
                    </div>
                </div>
                <div className="container mx-auto  md:flex flex-row justify-between">
                    <div className="flex flex-col items-center w-full md:w-1/3">
                        <div className="mb-4">
                            <Image
                                src={Farming}
                                alt="Farming"
                                width={623}
                                height={402}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full md:w-1/3">
                        <div className="text-center " style={{width: 205,height: 254,color: '#FFFFA0'}}>
                            Farming
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full md:w-1/3">
                        <div className="text-center " style={{minWidth: 205,maxWidth:400,height: 254,color: '#FFFFA0'}}>
                            Explore a variety of unique
                            and interesting regions,
                            chart the valley, meet
                            fascinating individuals and
                            uncover hidden secrets and
                            valuable resources along
                            the way.
                        </div>
                    </div>
                </div>
                <div className="container mx-auto  md:flex flex-row justify-between">
                    <div className="flex flex-col items-center w-full md:w-1/3">
                        <div className="mb-4">
                            <Image
                                src={Telegram}
                                alt="Telegram"
                                width={623}
                                height={402}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full md:w-1/3">
                        <div className="text-center " style={{width: 205,height: 254,color: '#FFFFA0'}}>
                            Telegram Mee
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full md:w-1/3">
                        <div className="text-center " style={{minWidth: 205,maxWidth:400,height: 254,color: '#FFFFA0'}}>
                            Explore a variety of unique
                            and interesting regions,
                            chart the valley, meet
                            fascinating individuals and
                            uncover hidden secrets and
                            valuable resources along
                            the way.
                        </div>
                    </div>
                </div>

            </>
        )
    }

    return (
        pageCheck(page)
    )
}

export default AdvancedApes;