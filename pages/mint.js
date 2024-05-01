import Image from "next/image";
import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { ethers } from "ethers";
import { MerkleTree } from "merkletreejs";
import keecak256 from "keccak256";
import WhiteList1 from "../data/whitelist1";
import WhiteList2 from "../data/whitelist2";
const contractAddress = "0x15d2C0Cd69ecC78334f55F1395cA46481246aaCE";
const contractABI = require("../contractABI.json");

const Mint = () => {
  // console.log(WhiteList1);
  const [val, setVal] = useState(0);
  const [user, setUser] = useState(null);
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [maxMint, setMaxMint] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [price, setPrice] = useState(0);
  const [maxTokens, setMaxTokens] = useState(0);
  // const [sale, setSale] = useState(false);
  const [err, setErr] = useState(null);
  const [fun, setFun] = useState(false);
  const [publicSale, setPublicSale] = useState(false);
  const [preSaleStage1, setPreSaleStage1] = useState(false);
  const [preSaleStage2, setPreSaleStage2] = useState(false);
  const [preMaxMint, setPreMaxMint] = useState(0);
  const [hexProofStage1, setHexProofStage1] = useState(null);
  const [hexProofStage2, setHexProofStage2] = useState(null);
  const [rootHashStage1, setRootHashStage1] = useState(null);
  const [rootHashStage2, setRootHashStage2] = useState(null);
  const [mintBtn, setMintbtn] = useState("Select 1 NFT");

  useEffect(async () => {
    switchNetwork();
    checkNet();
    async function getContract() {
      try {
        // console.log("getContract");
        window.provider = new ethers.providers.Web3Provider(window.ethereum);
        window.signer = await provider.getSigner();
        // console.log("signer", signer);
        window.contract = new ethers.Contract(
          contractAddress,
          contractABI.abi,
          signer
        );
        console.log("contract", contract);
        setFun(true);
      } catch (error) {
        console.log("getcontract", error);
        // console.log(err);
        if (error) {
          setErr(error.message);
        }
      }
    }
    await getContract();
    fetchContract();
    makeProofStage1();
    makeProofStage2();
  }, [user]);

  async function switchNetwork() {
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x1",
            chainName: "Ethereum Main Network",
            rpcUrls: [
                "https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7",
            ],
            blockExplorerUrls: ["https://etherscan.io"],
          },
        ],
      });
    } catch (error) {
      console.log("addnetwork", error);
      console.log(err);
      // setErr(error.message);
      // if (error){
      //     setErr(error.message);
      // }
    }

    // const chainId = 4;
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x1" }],
      });
    } catch (error) {
      console.log("switchnetwork", error);
      // setErr(error.message);
      if (error) {
        setErr(error.message);
      }
    }
  }

  async function fetchContract() {
    // if (window.ethereum) {
    try {
      const maxMint = await contract.MAX_PER_MINT();
      const totalSupply = await contract.totalSupply()-1;
      const price = await contract.price();
      const maxTokens = await contract.MAX_TOKENS();
      // const sale = await contract.publicSaleStarted();
      const publicSale = await contract.publicSaleStarted();
      const preSaleStage1 = await contract.presaleStage1Started();
      const preSaleStage2 = await contract.presaleStage2Started();
      console.log("presale stage 1: ", preSaleStage1);
      // const preMaxMint = await contract.presaleMaxPerWallet();

      setMaxMint(parseInt(maxMint, 10));
      setTotalSupply(parseInt(totalSupply, 10));
      setPrice(ethers.utils.formatEther(price));
      setMaxTokens(parseInt(maxTokens, 10));
      // setSale(sale);
      setPublicSale(publicSale);
      setPreSaleStage1(preSaleStage1);
      setPreSaleStage2(preSaleStage2);
      setPreMaxMint(parseInt(preMaxMint, 10));
      // console.log("maxMint", maxMint);
      // console.log("totalSupply", totalSupply);
      // console.log("price", price);
      // console.log("maxTokens", maxTokens);
      // console.log("sale", sale);
    } catch (error) {
      console.log("fetchcontract", error);
      // setErr(error.message);
      // if (error && error.message) {
      //   setErr(error.message);
      // }
    }
    // } else {
    //     console.log("No wallet detected");
    // }
  }

  async function checkNet() {
    try {
      const net = await window.ethereum.request({
        method: "net_version",
      });
      // console.log("net", net);
      // setErr(err.message);
    } catch (error) {
      console.log("checknet", error);
      // setErr(error.message);
      // if (error){
      //     setErr(error.message);
      // }
    }
  }

  // make is wallet unlock function

  const connectWallet = async () => {
    try {
      await provider.send("eth_requestAccounts", []);
      const user = await signer.getAddress();
      setUser(user);
      setIsWalletInstalled(true);
      console.log("user", user);
    } catch (error) {
      console.log("connectWallet", err);
      // setErr(err.message);
      if (error) {
        setErr(error.message);
      }
    }
  };

  const mint = async () => {
    try {
      // const cost = (price * val).toString();
      // const options = { value: ethers.utils.parseEther(cost) };
      const response = await contract.mint(1);
      console.log("response", response);
      fetchContract();
      setErr("Minted");
    } catch (err) {
      console.log("err", err.message);
      setErr(err.reason);
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
    if (publicSale || preSaleStage1 || preSaleStage2) {
      return <span className="text-green-500 font-bold uppercase">live</span>;
    } else {
      return <span className="text-red-500 font-bold uppercase">not live</span>;
    }
  };

  //presale

  const makeProofStage1 = () => {
    try {
      const buf2hex = (x) => "0x" + x.toString("hex");
      const leafNodes = WhiteList1.map((addr) => keecak256(addr));
      const merkleTree = new MerkleTree(leafNodes, keecak256, {
        sortPairs: true,
      });
      const rootHashStage1 = buf2hex(merkleTree.getRoot());
      console.log("merkleTree", merkleTree.toString());
      console.log("rootHash", rootHashStage1.toString("hex"));
      // const claimingAddress = leafNodes[0];
      const hexProofStage1 = merkleTree.getHexProof(keecak256(user));
      console.log("hexProofStage1", hexProofStage1);
      console.log("type of hexProofStage1", typeof hexProofStage1);
      // let v = merkleTree.verify(hexProofStage1, claimingAddress, rootHashStage1);
      // console.log("verify", v);
      setHexProofStage1(hexProofStage1);
      setRootHashStage1(rootHashStage1);
    } catch (err) {
      // console.log("err", err);
      setErr(err.message);
    }
  };

  const makeProofStage2 = () => {
    try {
      const buf2hex = (x) => "0x" + x.toString("hex");
      const leafNodes = WhiteList2.map((addr) => keecak256(addr));
      const merkleTree = new MerkleTree(leafNodes, keecak256, {
        sortPairs: true,
      });
      const rootHashStage2 = buf2hex(merkleTree.getRoot());
      console.log("merkleTree", merkleTree.toString());
      console.log("rootHashStage2", rootHashStage2.toString("hex"));
      // const claimingAddress = leafNodes[0];
      const hexProofStage2 = merkleTree.getHexProof(keecak256(user));
      console.log("hexProofStage2", hexProofStage2);
      console.log("type of hexProofStage2", typeof hexProofStage2);
      // let v = merkleTree.verify(hexProof, claimingAddress, rootHashStage2);
      // console.log("verify", v);
      setHexProofStage2(hexProofStage2);
      setRootHashStage2(rootHashStage2);
    } catch (err) {
      // console.log("err", err);
      setErr(err.message);
    }
  };

  const preMintStage1 = async () => {
    try {
      // const setHash = await contract.setMerkleRoot(rootHash);
      console.log("hexProofStage1", hexProofStage1);
      const cost = (price * val).toString();
      const options = { value: ethers.utils.parseEther(cost) };
      const response = await contract.mintPresaleStage1(1, hexProofStage1);
      console.log("response", response);
      fetchContract();
      setErr("Minted");
    } catch (err) {
      console.log("err", err);
      setErr(err.reason);
    }
  };

  const preMintStage2 = async () => {
    try {
      // const setHash = await contract.setMerkleRoot(rootHash);
      console.log("hexProofStage2", hexProofStage2);
      const cost = (price * val).toString();
      const options = { value: ethers.utils.parseEther(cost) };
      const response = await contract.mintPresaleStage2(1, hexProofStage2);
      console.log("response", response);
      fetchContract();
      setErr("Minted");
    } catch (err) {
      console.log("err", err);
      setErr(err.reason);
    }
  };

  const handlePreMintStage1 = () => {
    if (isWalletInstalled) {
      // makeProof();
      preMintStage1();
    } else {
      connectWallet();
    }
  };

  const handlePreMintStage2 = () => {
    if (isWalletInstalled) {
      // makeProof();
      preMintStage2();
    } else {
      connectWallet();
    }
  };

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
            <h1 className="heading uppercase text-[48px]">Mee Games</h1>
            <hr className="mx-auto w-1/2 border" />
            <h3 className="uppercase font-bold text-[32px]">
              {publicSale ? "Public Sale" : null}
              {preSaleStage1 ? "Phase 1 Mint" : null}
              {preSaleStage2 ? "Phase 2 Mint" : null}
            </h3>
            <h3 style={{color: '#777',marginTop: '-4px'}}>{!isWalletInstalled ? '( Connect Wallet )' : null}</h3>
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
            {publicSale ? (
              <>
                <button
                  className="mint1 uppercase py-1 px-7 bg-black text-white border-2 border-white hover:text-black hover:bg-white"
                  onClick={() => {
                    setVal(1);
                    document
                      .getElementsByClassName("mint1")[0]
                      .classList.add("active");
                    console.log("2");
                    setMintbtn("Selected 1 NFT");
                    // document
                    //     .getElementsByClassName("mint2")[0]
                    //     .classList.remove("active");
                    // document
                    //     .getElementsByClassName("mint3")[0]
                    //     .classList.remove("active");
                  }}
                >
                  {mintBtn ?? "Select 1 NFT"}
                </button>
              </>
            ) : null}
            {preSaleStage1 ? (
              <>
                <button
                  className="mint1 uppercase py-1 px-7 bg-black text-white border-2 border-white hover:text-black hover:bg-white"
                  onClick={() => {
                    setVal(1);
                    document
                      .getElementsByClassName("mint1")[0]
                      .classList.add("active");
                    console.log("3");
                    setMintbtn("Selected 1 NFT");
                    // document
                    //     .getElementsByClassName("mint2")[0]
                    //     .classList.remove("active");
                    // document
                    //     .getElementsByClassName("mint3")[0]
                    //     .classList.remove("active");
                  }}
                >
                  {mintBtn ?? "Select 1 NFT"}
                </button>
              </>
            ) : null}
            {preSaleStage2 ? (
              <>
                <button
                  className="mint1 uppercase py-1 px-7 bg-black text-white border-2 border-white hover:text-black hover:bg-white"
                  onClick={() => {
                    setVal(1);
                    document
                      .getElementsByClassName("mint1")[0]
                      .classList.add("active");
                    console.log("4");

                    setMintbtn("Selected 1 NFT");
                    // document
                    //     .getElementsByClassName("mint2")[0]
                    //     .classList.remove("active");
                    // document
                    //     .getElementsByClassName("mint3")[0]
                    //     .classList.remove("active");
                  }}
                >
                  {mintBtn ?? "Select 1 NFT"}
                </button>
              </>
            ) : null}
          </div>
          <div>
            <p className="text-[20px]">
              Price per mint: FREE!
              {/* <span className="font-bold">{price}</span> | Total
                            Price:{" "}
                            <span className="font-bold">{price * val}</span> */}
            </p>
          </div>
          <div>
            {isWalletInstalled ? (
              <>
                {publicSale && (
                  <>
                    <button
                      className="uppercase bg-red-500 text-white hover:text-black py-1 px-7"
                      onClick={() => {
                        handleMint();
                        // console.log(account);
                        // console.log("minted");
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
                )}
                {preSaleStage1 && (
                  <>
                    <button
                      className="uppercase bg-red-500 text-white hover:text-black py-1 px-7"
                      onClick={() => {
                        handlePreMintStage1();
                        // console.log(account);
                        // console.log("minted");
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
                )}
                {preSaleStage2 && (
                  <>
                    <button
                      className="uppercase bg-red-500 text-white hover:text-black py-1 px-7"
                      onClick={() => {
                        handlePreMintStage2();
                        // console.log(account);
                        // console.log("minted");
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
                )}
              </>
            ) : (
              <>
                <button
                  className="uppercase bg-red-500 text-white hover:text-black py-1 px-7"
                  onClick={() => {
                    connectWallet();
                    // console.log(account);
                    // console.log("connected");
                  }}
                >
                  Connect
                </button>
              </>
            )}
          </div>
          <div>
            {err && err != "Minted" ? (
              <p className="text-red-500 text-[20px]">Error Message: {err}</p>
            ) : null}
            {err === "Minted" ? (
              <p className="text-green-500 text-[20px]">Minted Successfully</p>
            ) : null}
            {!isWalletInstalled ? (
              <p className="text-[20px]">
                Connect to your wallet to see details
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <style>{`
        .mintBg {
          background-image: url("/svg/mintBg.svg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
        }
        .active {
          background: white;
          color: black;
        }
      `}</style>
    </>
  );
};

export default Mint;
