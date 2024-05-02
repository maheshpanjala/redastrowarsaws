import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
const Navbar = () => {
  const [mode, setMode] = useState(null);
  const location = useRouter();
  console.log(location)
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  if (mode === "open") {
    return (
      <>
        <header className="header w-full fixed z-10 top-0">
          <div className="container mx-auto flex flex-col justify-between items-center py-5">
            <div className="flex w-full mx-5 md:mx-0 justify-between md:justify-start">
              <div className="ml-5 w-[32px] h-[32px] md:w-[48px] md:h-[48px]">
                <Link href="/" passHref>
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={170}
                    height={144}
                    className="cursor-pointer"
                  />
                </Link>
              </div>
              <div className="md:hidden mr-5 text-white flex justify-center items-center">
                <HiMenu
                  className="hidden w-7 h-7"
                  onClick={() => {
                    setMode("open");
                  }}
                />
                <HiMenu
                className=" w-7 h-7"
                onClick={() => {
                  setMode("close");
                }}
              />
              </div>
            </div>
            <div className="md:flex mx-5 md:mx-0 flex-col md:flex-row justify-center md:justify-around text-white text-sm w-[868px] space-y-5 md:space-y-0 bg-black md:bg-transparent mt-5 md:mt-0 py-5 md:py-0">
              <Link href="/home" passHref>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <p
                    className={
                      "text-[16px]" + (url === "/home" ? " activeLink" : "")
                    }
                  >
                    About
                  </p>
                </div>
              </Link>
              <div className="md:hidden flex justify-center items-center">
                <hr className="mx-auto w-[305px] border" />
              </div>
              <Link href="/docs" passHref>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <p
                    className={
                      "text-[16px] op0" +
                      (url === "/docs" ? " activeLink" : "")
                    }
                  >
                    Docs
                  </p>
                </div>
              </Link>
              <div className="md:hidden flex justify-center items-center">
                <hr className="mx-auto w-[305px] border" />
              </div>
              <Link href="/tokenomics" passHref>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <p
                    className={
                      "text-[16px]" +
                      (url === "/tokenomics" ? " activeLink" : "")
                    }
                  >
                    Tokenomics
                  </p>
                </div>
              </Link>
              <div className="md:hidden flex justify-center items-center">
                <hr className="mx-auto w-[305px] border" />
              </div>
              <Link href="/meenetwork" passHref>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <p
                    className={
                      "text-[16px]" +
                      (url === "/meenetwork" ? " activeLink" : "")
                    }
                  >
                    Mee Network
                  </p>
                </div>
              </Link>
    
              <Link href="#" passHref >
              <div className="flex flex-col items-center justify-center cursor-pointer" >

              <button style={{
                borderRadius: '24px', border: '1px solid #FFFFFF', width: '172px',
                height: '42px',

                padding: '9.99px 24.36px 8.01px 15.64px'
              }}> LAUNCH APP </button>
               </div>
              </Link>
            </div>
          </div>
        </header>
      </>
    );
  }
  else if (mode === "close") {
    return (
      <>
        <header className="header w-full fixed z-10 top-0">
          <div className="container mx-auto flex flex-row justify-between items-center py-5">
            <div className="flex w-full mx-5 md:mx-0 justify-between md:justify-start">
              <div className="w-[32px] h-[32px] md:w-[48px] md:h-[48px]">
                <Link href="/" passHref>
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={48}
                    height={48}
                    className="cursor-pointer"
                  />
                </Link>
              </div>
              <div className="md:hidden text-white flex justify-center items-center">
                <HiMenu
                  className="w-7 h-7"
                  onClick={() => {
                    setMode("open");
                  }}
                />
                <HiMenu
                  className="hidden w-7 h-7"
                  onClick={() => {
                    setMode("close");
                  }}
                />
              </div>
            </div>
            <div className="hidden md:flex flex-col md:flex-row justify-center md:justify-around text-white text-sm w-[868px]">
              <Link href="/home" passHref>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <p
                    className={
                      "text-[16px] active" +
                      (url === "/home" ? " activeLink" : "op0")
                    }
                  >
                    HOME
                  </p>
                </div>
              </Link>
              <Link href="/docs" passHref>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <p
                    className={
                      "text-[16px]" +
                      (url === "/docs" ? " activeLink" : "op0")
                    }
                  >
                    Docs
                  </p>
                </div>
              </Link>
              <Link href="/tokenomics" passHref>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <p
                    className={
                      "text-[16px]" +
                      (url === "/tokenomics" ? " activeLink" : "op0")
                    }
                  >
                    Tokenomics
                  </p>
                </div>
              </Link>
              <Link href="/tokenomics" passHref>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <p
                    className={
                      "text-[16px]" +
                      (url === "/tokenomics" ? " activeLink" : "")
                    }
                  >
                    Tokenomics
                  </p>
                </div>
              </Link>
              <Link href="/meenetwork" passHref>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <p
                    className={
                      "text-[16px]" +
                      (url === "/meenetwork" ? " activeLink" : "")
                    }
                  >
                    Mee Network
                  </p>
                </div>
              </Link>
              <Link href="/marketplace" passHref>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <p
                    className={
                      "text-[16px]" +
                      (url === "/marketplace" ? " activeLink" : "")
                    }
                  >
                    MARKETPLACE
                  </p>
                </div>
              </Link>
              <Link href="#" passHref>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <p
                    className={
                      "text-[16px]" + (url === "/" ? " activeLink" : "")
                    }
                  >
                    PLAY
                  </p>
                </div>
              </Link>
            </div>
            <div></div>
          </div>
        </header>
      </>
    );
  }

  return (
    <>
      <header className="header w-full fixed z-10 top-0">
        <div className="container mx-auto flex flex-row justify-between items-center py-4">
          <div className="flex w-full md:w-auto mx-5 md:mx-0 justify-between md:justify-start">
            {/* <div> */}
            <Link href="/" passHref>
            <Image
                    src="/logo.png"
                    alt="logo"
                    width={150}
                    height={124}
                    className="cursor-pointer"
                  />
            </Link>
            <div className="md:hidden text-white flex justify-center items-center">
              <HiMenu
                className="w-7 h-7"
                onClick={() => {
                  setMode("open");
                }}
              />
              <HiMenu
                className="hidden w-7 h-7"
                onClick={() => {
                  setMode("close");
                }}
              />
            </div>
          </div>
          <div className="hidden md:flex flex-row justify-around text-white text-sm w-[868px]">
            <Link href="/home" passHref>
              <div className="flex flex-col items-center justify-center cursor-pointer">
                <p
                 className={
                  "text-[20px]" +
                  (url === "/home" ? " activeLink" : " navRoutLink")
                }
                >
                  About
                </p>
              </div>
            </Link>
            <Link href="/docs" passHref>
              <div className="flex flex-col items-center justify-center cursor-pointer">
                <p
                  className={
                    "text-[20px]" +
                    (url === "/docs" ? " activeLink" : " navRoutLink")
                  }
                >
                  Docs
                </p>
              </div>
            </Link>
          
            <Link href="/tokenomics" passHref>
              <div className="flex flex-col items-center justify-center cursor-pointer">
                <p
                  className={
                    "text-[16px]" +
                    (url === "/tokenomics" ? " activeLink" : " navRoutLink")
                  }
                >
                  Tokenomics
                </p>
              </div>
            </Link>
            <Link href="/meenetwork" passHref>
              <div className="flex flex-col items-center justify-center cursor-pointer">
                <p
                  className={
                    "text-[16px]" +
                    (url === "/meenetwork" ? " activeLink" : " navRoutLink")
                  }
                >
                  Mee Network
                </p>
              </div>
            </Link>
            
            <Link href="#" passHref >
              <div className="flex flex-col items-center justify-center cursor-pointer" style={{ padding: '10px 14px', marginLeft: '40px' }}>
                <button className={
                    "text-[16px]" +
                    (url === "/" ? " launch-button" : " launch-button")
                  }>LAUNCH APP</button>
              </div>
            </Link>
          </div>
          <div></div>
        </div>
      </header>
    </>
  );
}

export default Navbar;