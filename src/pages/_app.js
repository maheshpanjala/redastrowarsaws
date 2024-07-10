import "../styles/globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
    sepolia,
    zetachainAthensTestnet
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


// Rainbowkit config
const { chains, publicClient } = configureChains(
    [ zetachainAthensTestnet],
    [
        alchemyProvider({ apiKey: 'eD7NOXYrpnyi695xIro51rwWHYQdEYMe' }),
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    projectId: "730560f4c42912af67d1a46b75218d4e",
    appName: "agg",
    chains
});

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
})



function MyApp({ Component, pageProps }) {
    return (
        <>
            <WagmiConfig config={wagmiConfig}>
                <RainbowKitProvider chains={chains}>
                    <Component {...pageProps} />
                </RainbowKitProvider>
            </WagmiConfig>
        </>
    );
}

export default MyApp;
