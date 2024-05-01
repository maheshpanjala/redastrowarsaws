// import Image from "next/image";
import styles from "./roadmap.module.css";
import Image from "next/image";
import { MdCircle } from "react-icons/md";
import PreMintMap from "../public/svg/preMintMap.svg";
import PostMintMap from "../public/svg/postMintMap.svg";
import MobilePreMintMap from "../public/svg/mobilePreMint.svg";
import MobilePostMintMap from "../public/svg/mobilePostMint.svg";
import { Disclosure } from "@headlessui/react";

const Roadmap = ({ page }) => {
    const data = [
        {
            phase: "Phase 1",
            name: "Initiate Sequence: MartianVerse.Web3",
            // desc: "Announce project launch with teaser videos & sneak-peeks.",
            status: "Completed"
        },
        {
            phase: "Phase 2",
            name: "Begin Recruitment",
            // desc: "Release website & reveal information on weekly basis.",
            status: "Completed"
        },
        {
            phase: "Phase 3",
            name: "Mission Briefing",
            // desc: "Collaborate with established projects & influencers to build up community.",
            status: "TBD"
        },
        {
            phase: "Phase 4",
            name: "Beta Testing",
            // desc: "Open Discord for invite-only members & alpha group collabs.",
            status: "TBD"
        },
    ]

    const dataa = [
        {
            phase: "Phase 5",
            name: "MartianVerse Activation",
            // desc: "All holders are airdropped $RAW tokens, in-game assets and land plot to begin their journey.",
            status: "TBD"
        },
        {
            phase: "Phase 6",
            name: "Initiate Mission: 1",
            // desc: "Our 1-vs-1 Battle Game goes live followed by the Racing Game.",
            status: "TBD"
        },
        {
            phase: "Phase 7",
            name: "Martian Verse Expansion",
            // desc: "Enable in-game trading of assets utilising the $RAW token for transaction.",
            status: "TBD"
        },
        {
            phase: "Phase 8",
            name: "Initiate Mission: 2",
            // desc: "Gen 2 Avatars are minted to expand the user-base of the game.",
            status: "TBD"
        },
        {
            phase: "Phase 9",
            name: "Final Game Release",
            // desc: "Open World MartianVerse is released allowing users to claim Land Plots and access Communal Spaces & Outer Lands.",
            status: "TBD"
        }
    ]

    const checkStatus = (status) => {
        if (status === "Completed") {
            return (
                <>
                    <div className="flex flex-row items-center space-x-1 text-left">
                        < MdCircle color="green" />
                        <p className="text-green-500">
                            Completed
                        </p>
                    </div>
                </>
            )
        } else if (status === "TBD") {
            return (
                <>
                    <div className="flex flex-row items-center space-x-1 text-left">
                        < MdCircle color="red" />
                        <p className="text-red-500">
                            TBD
                        </p>
                    </div>
                </>
            )
        }
    }

    const pageCheck = (page) => {
        if (page === "home") {
            return (
                <div className="container mx-auto text-white">
                    <h1 className="heading uppercase text-center text-[24px] md:text-[56px]">Road map</h1>
                    <div className="hidden md:flex justify-center md:justify-end mx-5 md:mx-0 marg-10 my-10">
                        <Image src={PreMintMap} alt="Pre Mint Map" />
                    </div>
                    <div className="flex md:hidden justify-center my-5">
                        <Image src={MobilePreMintMap} alt="Pre Mint Map" />
                    </div>
                    <div className="mx-auto hidden md:flex justify-center md:justify-end mx-5 md:mx-5 marg-9 my-10">
                        <Image src={PostMintMap} alt="Post Mint Map" />
                    </div>
                    <div className="flex md:hidden justify-center my-5">
                        <Image src={MobilePostMintMap} alt="Post Mint Map" />
                    </div>
                </div>
            )
            // return (
            //     <>
            //         <div className="roadmapImageDiv w-full">
            //             <div className="roadmapOverlay w-full mt-28 flex justify-center items-center">
            //                 <div className="">
            //                     <h1 className="heading text-5xl text-white uppercase">
            //                         Roadmap
            //                     </h1>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="w-full flex justify-center mb-28 text-white">
            //             <div className={styles.timeline}>
            //                 {data.map((item, index) => (
            //                     <div className={styles.timelineItem} key={index}>
            //                         <div className="content flex flex-row justify-between items-center" key={index}>
            //                             <div className="w-1/4">
            //                                 <h1 className="font-black text-xl text-gray-500">
            //                                     {item.phase}
            //                                 </h1>
            //                                 <h1 className="font-bold text-xl">
            //                                     {item.name}
            //                                 </h1>
            //                                 <p>
            //                                     {checkStatus(item.status)}
            //                                 </p>
            //                             </div>
            //                             <div className="w-1/2">
            //                                 <p>
            //                                     {item.desc}
            //                                 </p>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 ))}
            //             </div>
            //         </div>
            
            //     </>
            // )
        } else if (page === "roadmap") {
            return (
                <>
                    <div className="roadmapImageDiv w-full">
                        <div className="roadmapOverlay w-full pt-28 flex justify-center items-center">
                            <div className="-mt-7">
                                <h1 className="heading text-5xl text-white uppercase">
                                    Roadmap
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="bgDiv w-[1200px] h-1000 mx-auto py-5 ">
                        <div className="container mx-auto flex justify-center text-white">
                            <div className="w-full">
                                <div className="w-full mx-auto space-y-10">
                    
                                    <div className="flex flex-col w-1000 mx-auto">
                                        {data.map((item, index) => {
                                            return (
                                                <>
                                                    <div className="my-7">
                                                        <Disclosure className="w-full my-5">
                                                            {({ open }) => (
                                                                <>
                                                                    <Disclosure.Button className={`${open ? 'rounded-t-lg' : 'rounded-lg'} w-full px-5 py-3`} style={{ background: 'linear-gradient(135deg, #172368 2.88%, #633023 100%)' }}>
                                                                        <div className="w-full flex flex-row justify-between items-center">
                                                                            <div className="flex flex-row justify-around text-2xl font-semibold">
                                                                                <div className="text-[#FE8787]">{item.phase}{" "}</div>
                                                                                <div className="mx-2">|</div>
                                                                                <div>{item.name}</div>
                                                                            </div>
                                                                            <div className="flex flex-row justify-around">
                                                                                <div className="mr-3">{checkStatus(item.status)}</div>
                                                                                {/* <BiChevronsDown className={`${open ? 'rotate-180 transform' : ''} w-5 h-5`} /> */}
                                                                            </div>
                                                                        </div>
                                                                    </Disclosure.Button>
                                                                    {/* <Disclosure.Panel className="px-5 py-3 rounded-b-lg" style={{ background: 'linear-gradient(135deg, #172368 2.88%, #633023 100%)' }}>
                                                                        <p>{item.desc}</p>
                                                                    </Disclosure.Panel> */}
                                                                </>
                                                            )}
                                                        </Disclosure>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container mx-auto flex justify-center text-white">
                            <div className="w-full">
                                <div className="w-full mx-auto space-y-10">
                    
                                    <div className="flex flex-col w-1000 mx-auto">
                                        {dataa.map((item, index) => {
                                            return (
                                                <>
                                                    <div className="my-7">
                                                        <Disclosure className="w-full my-5">
                                                            {({ open }) => (
                                                                <>
                                                                    <Disclosure.Button className={`${open ? 'rounded-t-lg' : 'rounded-lg'} w-full px-5 py-3`} style={{ background: 'linear-gradient(135deg, #172368 2.88%, #633023 100%)' }}>
                                                                        <div className="w-full flex flex-row justify-between items-center">
                                                                            <div className="flex flex-row justify-around text-2xl font-semibold">
                                                                                <div className="text-[#FE8787]">{item.phase}{" "}</div>
                                                                                <div className="mx-2">|</div>
                                                                                <div>{item.name}</div>
                                                                            </div>
                                                                            <div className="flex flex-row justify-around">
                                                                                <div className="mr-3">{checkStatus(item.status)}</div>
                                                                                {/* <BiChevronsDown className={`${open ? 'rotate-180 transform' : ''} w-5 h-5`} /> */}
                                                                            </div>
                                                                        </div>
                                                                    </Disclosure.Button>
                                                                    {/* <Disclosure.Panel className="px-5 py-3 rounded-b-lg" style={{ background: 'linear-gradient(135deg, #172368 2.88%, #633023 100%)' }}>
                                                                        <p>{item.desc}</p>
                                                                    </Disclosure.Panel> */}
                                                                </>
                                                            )}
                                                        </Disclosure>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </>
            )
        }
    }

    return (
        pageCheck(page)
    )
}

export default Roadmap;