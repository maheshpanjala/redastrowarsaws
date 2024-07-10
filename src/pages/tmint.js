import Image from "next/image";
import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { BigNumber, Contract, ethers } from "ethers";
const contractAddress = "";
const contractABI = require("../contractABI.json");

const Mint = () => {
    const [val, setVal] = useState(0);
    // const [provider, setProvider] = useState(null);
    // const [signer, setSigner] = useState(null);
    const [user, setUser] = useState(null);
    const [isWalletInstalled, setIsWalletInstalled] = useState(false);
    // const [contract, setContract] = useState(null);
    const [maxMint, setMaxMint] = useState(0);
    const [totalSupply, setTotalSupply] = useState(0);
    const [price, setPrice] = useState(0);
    const [maxTokens, setMaxTokens] = useState(0);
    const [err, setErr] = useState([]);
    // const [unlocked, setUnlocked] = useState(false);
    const [sale, setSale] = useState(false);
    const [state, setState] = useState(false);
    const [net, setNet] = useState(false);

    useEffect(() => {
        switchNetwork();
        async function getContract() {
            try {
                window.provider = new ethers.providers.Web3Provider(
                    window.ethereum
                );
                window.signer = provider.getSigner();
                window.contract = new ethers.Contract(
                    contractAddress,
                    contractABI.abi,
                    signer
                );
                // console.log("contract inside", contract);
            } catch (err) {
                console.log("err", err);
                setErr(err);
            }
        }
        getContract();
        // console.log("contract outside", contract);
        // if (unlocked) {
        fetchContract();
        // }
    }, [user]);

    // useEffect(() => {
    //     async function checkNet() {
    //         const net = await provider.getNetwork();
    //         return net.name
    //     }
    //     const network = checkNet();
    //     if (network === "rinkeby") {
    //         setNet(true);
    //     } else {
    //         alert("Please connect to Rinkeby testnet");
    //         document.location.reload(true);
    //     }
    // }, []);

    // useEffect(() => {
    //     window.unlocked = window.ethereum._metamask.isUnlocked();
    //     // console.log("unlocked", unlocked);
    //     if (!unlocked) {
    //         alert("Unlock your wallet to continue");
    //         document.location.reload(true);
    //     }
    // }, []);

    const connectWallet = async () => {
        // await window.ethereum
        //     .request({
        //         method: "eth_requestAccounts",
        //     })
        //     .then((users) => {
        //         setUser(users[0]);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        try {
            if (unlocked) {
                await provider.send("eth_requestAccounts", []);
                const user = await signer.getAddress();
                setUser(user);
                setIsWalletInstalled(true);
                console.log("user", user);
            }
        } catch (err) {
            console.log("err", err);
            setErr(err);
        }
    };

    const switchNetwork = async () => {
        await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
                {
                    chainId: "0x4",
                    chainName: "Rinkeby Test Network",
                    rpcUrls: [
                        "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
                    ],
                    blockExplorerUrls: ["https://rinkeby.etherscan.io"],
                },
            ],
        });
        // const chainId = 4;
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x4" }],
        });
    };

    const fetchContract = async () => {
        // console.log(await contract.MAX_PER_MINT());
        try {
            const maxMint = await contract.MAX_PER_MINT();
            const totalSupply = await contract.totalSupply();
            const price = await contract.price();
            const maxTokens = await contract.MAX_TOKENS();
            const sale = await contract.publicSaleStarted();
            // console.log(parseInt(maxMint, 10));
            // console.log(parseInt(totalSupply, 10));
            // console.log(parseInt(price, 10));
            // console.log(parseInt(maxTokens, 10));
            setMaxMint(parseInt(maxMint, 10));
            setTotalSupply(parseInt(totalSupply, 10));
            setPrice(ethers.utils.formatEther(price));
            setMaxTokens(parseInt(maxTokens, 10));
            setSale(sale);
        } catch (err) {
            console.log("err", err);
            setErr(err);
        }
    };

    const disconnect = async () => {
        setIsWalletInstalled(false);
    };

    console.log("value", val);
    console.log("mul", typeof (price * val).toString());
    // const cost = ethers.utils.formatEther(price);
    // console.log(cost);
    // console.log(typeof BigNumber.from(cost).mul(BigNumber.from(val)));
    // if (val !== 0) {
    //     const finalC = ethers.utils.parseUnits((price * val)).toString();
    //     console.log("finalC", ethers.utils.parseEther(finalC));
    // }
    // console.log("final", ethers.utils.parseUnits((price*val).toString()))
    // console.log("contract.data", contract.mint(val));

    const mint = async () => {
        try {
            const cost = (price * val).toString();
            const options = { value: ethers.utils.parseEther(cost) };
            const response = await contract.mint(val, options);
            console.log("response", response);
            fetchContract();
        } catch (err) {
            console.log("err", err);
            setErr(err);
        }
    };

    const handleMint = () => {
        if (isWalletInstalled) {
            mint();
        } else {
            connectWallet();
        }
    };

    const checkSales = () => {
        if (sale) {
            return (
                <span className="text-green-500 font-bold uppercase">live</span>
            );
        } else {
            return (
                <span className="text-red-500 font-bold uppercase">
                    not live
                </span>
            );
        }
    };

    // console.log(val);

    // console.log(contract);
    return (
        <>
            <div className="text-white mintBg min-h-screen flex justify-center items-center">
                <div className="rounded-3xl bg-black w-[1090px] h-[872px] px-10 flex flex-col justify-center items-center space-y-10">
                    <div className="flex flex-row justify-between w-full">
                        {isWalletInstalled ? (
                            <>
                                <p className="text-[20opx] font-bold">
                                    <span className="heading">Wallet :</span>{" "}
                                    <span>
                                        {user.substr(0, 6)}...
                                        {user.substr(36, 42)}
                                    </span>
                                </p>
                            </>
                        ) : (
                            <p className="text-[20opx] font-bold">Wallet:</p>
                        )}
                        <p className="text-[20opx] font-bold">
                            <span className="heading">Status : </span>
                            {checkSales()}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center text-center mx-auto w-full space-y-4">
                        <div className="mx-auto w-[132px] h-[132px]">
                            <Image
                                src="/logo.png"
                                alt="logo"
                                width={132}
                                height={132}
                                className="cursor-pointer"
                            />
                        </div>
                        <h1 className="heading uppercase text-[48px]">
                            Mee Games
                        </h1>
                        <hr className="mx-auto w-1/2 border" />
                        <h3 className="uppercase font-bold text-[32px]">
                            Public Mint
                        </h3>
                    </div>
                    <div className="text-center mx-auto flex flex-col justify-center w-[804px]">
                        <div>
                            <ProgressBar
                                completed={totalSupply / maxTokens}
                                bgColor="#d7273a"
                                height="5px"
                                className="w-[804px]"
                                borderRadius="0"
                                isLabelVisible={false}
                                labelColor="#d7273a"
                                animateOnRender
                            />
                        </div>
                        <p className="text-[24px]">
                            {totalSupply}/{maxTokens} Minted
                        </p>
                    </div>
                    <div className="flex flex-row justify-around w-1/2">
                        <button
                            className="mint1 uppercase py-1 px-7 bg-black text-white border-2 border-white hover:text-black hover:bg-white"
                            onClick={() => {
                                setVal(1);
                                document
                                    .getElementsByClassName("mint1")[0]
                                    .classList.add("active");
                                document
                                    .getElementsByClassName("mint2")[0]
                                    .classList.remove("active");
                                document
                                    .getElementsByClassName("mint3")[0]
                                    .classList.remove("active");
                            }}
                        >
                            Mint 1
                        </button>
                        <button
                            className="mint2 uppercase py-1 px-7 bg-black text-white border-2 border-white hover:text-black hover:bg-white"
                            onClick={() => {
                                setVal(2);
                                document
                                    .getElementsByClassName("mint2")[0]
                                    .classList.add("active");
                                document
                                    .getElementsByClassName("mint1")[0]
                                    .classList.remove("active");
                                document
                                    .getElementsByClassName("mint3")[0]
                                    .classList.remove("active");
                            }}
                        >
                            Mint 2
                        </button>
                        <button
                            className="mint3 uppercase py-1 px-7 bg-black text-white border-2 border-white hover:text-black hover:bg-white"
                            onClick={() => {
                                setVal(3);
                                document
                                    .getElementsByClassName("mint3")[0]
                                    .classList.add("active");
                                document
                                    .getElementsByClassName("mint1")[0]
                                    .classList.remove("active");
                                document
                                    .getElementsByClassName("mint2")[0]
                                    .classList.remove("active");
                            }}
                        >
                            Mint 3
                        </button>
                    </div>
                    <div>
                        <p className="text-[20px]">
                            Price per mint:{" "}
                            <span className="font-bold">{price}</span> | Total
                            Price:{" "}
                            <span className="font-bold">{price * val}</span>
                        </p>
                    </div>
                    <div>
                        {isWalletInstalled ? (
                            <>
                                <button
                                    className="uppercase bg-red-500 text-white hover:text-black py-1 px-7"
                                    onClick={() => {
                                        handleMint();
                                        // console.log(account);
                                        console.log("minted");
                                    }}
                                >
                                    Mint Now
                                </button>
                                {/* <button
                                    className="uppercase bg-red-500 text-white hover:text-black py-1 px-7"
                                    onClick={() => {
                                        disconnect();
                                        // console.log(account);
                                        console.log("logout");
                                    }}
                                >
                                    Log Out
                                </button> */}
                            </>
                        ) : (
                            <button
                                className="uppercase bg-red-500 text-white hover:text-black py-1 px-7"
                                onClick={() => {
                                    connectWallet();
                                    // console.log(account);
                                    console.log("connected");
                                }}
                            >
                                Connect
                            </button>
                        )}
                    </div>
                    <div>
                        <p className="text-red-500 text-[20px]">
                            Error Message: {err}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mint;
