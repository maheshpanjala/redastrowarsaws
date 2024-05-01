import "../styles/globals.css";
import { useState, useEffect } from "react";
import Loading from "../components/loading";
// import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
