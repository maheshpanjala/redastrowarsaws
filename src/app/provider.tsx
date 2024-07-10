"use client";

import * as React from "react";
import '@rainbow-me/rainbowkit/styles.css'
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { bsc, bscTestnet, zkSyncSepoliaTestnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { alchemyProvider } from 'wagmi/providers/alchemy';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const alchemyApiKey: any  = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
const obj = { apiKey: alchemyApiKey }
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNET === "true"
      ? [ zkSyncSepoliaTestnet]
      : [bsc]),
  ],
  [
    alchemyProvider({apiKey:alchemyApiKey}),
    publicProvider(),
  ]
);

const projectId = "730560f4c42912af67d1a46b75218d4e"; // Change the projectId

const { connectors } = getDefaultWallets({
  appName: "agg",
  projectId,
  chains,
});

const demoAppInfo = {
  appName: "agg",
};

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
        {mounted && children}
        <ToastContainer />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}