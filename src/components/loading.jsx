import Image from "next/image"
import LogoSvg from "../public/svg/logoName.svg";

const Loading = () => {
  return (
    <>
      <div className="bg-black min-h-screen flex flex-col justify-center items-center space-y-7">
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
        />
        <Image src={LogoSvg} width={512} height={61} alt="Mee Games" />
        <video
          className="w-72 h-72"
          autoPlay
          loop
          muted
          playsInline
          src="/loading.mp4"
        />
        {/* <div className="spinner-box">
                    <div className="blue-orbit leo">
                    </div>

                    <div className="green-orbit leo">
                    </div>

                    <div className="red-orbit leo">
                    </div>

                    <div className="white-orbit w1 leo">
                    </div><div className="white-orbit w2 leo">
                    </div><div className="white-orbit w3 leo">
                    </div>
                </div> */}
      </div>
    </>
  )
}

export default Loading;