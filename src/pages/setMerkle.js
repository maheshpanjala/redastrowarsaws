import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { MerkleTree } from "merkletreejs";
import keecak256 from "keccak256";
import WhiteList1 from "../data/whitelist1";
import WhiteList2 from "../data/whitelist2";
const contractAddress = "0x15d2C0Cd69ecC78334f55F1395cA46481246aaCE";
const contractABI = require("../contractABI.json");

const SetMerkle = () => {
  const [user, setUser] = useState(null);
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [err, setErr] = useState(null);
  const [fun, setFun] = useState(false);
  const [con, setCon] = useState(null);
  const [hexProof, setHexProof] = useState(null);
  const [rootHashStage1, setRootHashStage1] = useState(null);
  const [rootHashStage2, setRootHashStage2] = useState(null);
  const [maxMint, setMaxMint] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [price, setPrice] = useState(0);
  const [maxTokens, setMaxTokens] = useState(0);

  useEffect(() => {
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
        // console.log("contract", contract);
        setFun(true);
        setCon("Contract Fetched");
      } catch (error) {
        // console.log("getcontract", error);
        setErr(err);
      }
    }
    getContract();
    fetchContract();
    // makeProof();
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
      // console.log("addnetwork", error);
      setErr(err);
    }

    // const chainId = 4;
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x1" }],
      });
    } catch (error) {
      // console.log("switchnetwork", error);
      setErr(err);
    }
  }

  async function fetchContract() {
    // if (window.ethereum) {
    try {
      const maxMint = await contract.MAX_PER_MINT();
      const totalSupply = await contract.totalSupply();
      const price = await contract.price();
      const maxTokens = await contract.MAX_TOKENS();
      setMaxMint(parseInt(maxMint, 10));
      setTotalSupply(parseInt(totalSupply, 10));
      setPrice(ethers.utils.formatEther(price));
      setMaxTokens(parseInt(maxTokens, 10));
    } catch (error) {
      // console.log("fetchcontract", error);
      setErr(err);
    }
  }

  async function checkNet() {
    try {
      const net = await window.ethereum.request({
        method: "net_version",
      });
      // console.log("net", net);
      setErr(err);
    } catch (error) {
      // console.log("checknet", error);
      setErr(err);
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
    } catch (err) {
      // console.log("connectWallet", err);
      setErr(err);
    }
  };

  //presale
  const makeProofStage1 = () => {
    try {
      const leafNodes = WhiteList1.map((addr) => keecak256(addr));
      const merkleTree = new MerkleTree(leafNodes, keecak256, {
        sortPairs: true,
      });
      const rH = merkleTree.getRoot();
      // console.log("merkleTree", merkleTree.toString());
      console.log("rootHashStage1", rH.toString("hex"));
      const claimingAddress = leafNodes[0];
      const hexProof = merkleTree.getHexProof(claimingAddress);
      setHexProof(hexProof);
      setRootHashStage1(rH);
      console.log("rH", rH.toString("hex"));
      // console.log("hexProof", hexProof);
      // console.log("type of hexProof", typeof hexProof);
      console.log("rootHashStage1", rootHashStage1.toString("hex"));
    } catch (err) {
      // console.log("err", err);
      setErr(err);
    }
  };

  const makeProofStage2 = () => {
    try {
      const leafNodes = WhiteList2.map((addr) => keecak256(addr));
      const merkleTree = new MerkleTree(leafNodes, keecak256, {
        sortPairs: true,
      });
      const rH = merkleTree.getRoot();
      // console.log("merkleTree", merkleTree.toString());
      console.log("rootHashStage2", rH.toString("hex"));
      const claimingAddress = leafNodes[0];
      const hexProof = merkleTree.getHexProof(claimingAddress);
      setHexProof(hexProof);
      setRootHashStage2(rH);
      console.log("rH", rH.toString("hex"));
      // console.log("hexProof", hexProof);
      // console.log("type of hexProof", typeof hexProof);
      console.log("rootHashStage2", rootHashStage2.toString("hex"));
    } catch (err) {
      // console.log("err", err);
      setErr(err);
    }
  };

  const setMerkleStage1 = async () => {
    try {
      console.log(contract);
      console.log(rootHashStage1);
      const setHash = await contract.setMerkleRootStage1(rootHashStage1);
      setErr("Success");
    } catch (err) {
      // console.log("err", err);
      setErr(err);
    }
  };

  const setMerkleStage2 = async () => {
    try {
      console.log(contract);
      console.log(rootHashStage2);
      const setHash = await contract.setMerkleRootStage2(rootHashStage2);
      setErr("Success");
    } catch (err) {
      // console.log("err", err);
      setErr(err);
    }
  };

  const setStuff = () => {
    if (isWalletInstalled) {
      makeProofStage1();
      {
        rootHashStage1
          ? setMerkleStage1()
          : setErr("No Root Hash. Press Button Again");
      }
    } else {
      connectWallet();
    }
  };

  return (
    <>
      <div>
        <div>
          {isWalletInstalled ? (
            <>
              <div className="m-5">
                <h1>User: {user}</h1>
              </div>
            </>
          ) : (
            <div className="m-5">Not connected</div>
          )}
        </div>
        <div>
          {fun ? (
            <div className="m-5">{con}</div>
          ) : (
            <div className="m-5">Wait Contract Fetching in Progress</div>
          )}
        </div>
        <div>
          {!isWalletInstalled && (
            <button
              onClick={() => {
                connectWallet();
              }}
              className="border rounded-lg px-7 py-2 m-5"
            >
              Connect Wallet
            </button>
          )}

          {isWalletInstalled && (
            <button
              onClick={() => {
                setStuff();
              }}
              className="border rounded-lg px-7 py-2 m-5"
            >
              Set Merkle Root
            </button>
          )}
        </div>
        <div className="m-5">Reply from server: {err}</div>
        <div className="m-5">
          {WhiteList1.map((addr, index) => (
            <div key={index}>
              {index}. {addr}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SetMerkle;
