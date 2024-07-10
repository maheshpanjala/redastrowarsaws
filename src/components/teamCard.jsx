import Image from "next/image";
import Link from "next/link";
import { FiTwitter, FiLinkedin } from 'react-icons/fi';

const TeamCard = ({ pic, name, titles, lin, twit }) => {
    // console.log(pic);
    const showTitle = (titles) => {
        if (titles.length === 1) {
            return (
                <h3 className="text-[6px] md:text-[12px]">
                    {titles[0]}
                </h3>
            )
        } else {
            return (
                <>
                    <h3 className="text-[6px] md:text-[12px]">
                        {titles[0]} &bull; {titles[1]}
                    </h3>
                </>
            )
        }
    }

    const showTwitter = (twit) => {
        if (twit) {
            return (
                <Link href={twit} passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        <FiTwitter className="text-red-500 cursor-pointer" />
                    </a>
                </Link>
            )
        }
    }

    const showLinkedin = (lin) => {
        if (lin) {
            return (
                <Link href={lin} passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        <FiLinkedin className="text-red-500 cursor-pointer" />
                    </a>
                </Link>
            )
        }
    }

    return (
        <>
            <div className="flex flex-col justify-center text-center">
                <div className="mx-auto w-[87px] h-[87px] md:w-[120px] md:h-[120px]">
                    <Image
                        src={pic}
                        alt={name}
                        width={120}
                        height={120}
                        className="rounded-full"
                    />
                </div>
                <div className="mt-4">
                    <h1 className="text-[12px] md:text-[20px]">
                        {name}
                    </h1>
                    {showTitle(titles)}
                </div>
                <div className="w-1/2 mx-auto mt-2 flex flex-row justify-around items-center">
                    {showTwitter(twit)}
                    {showLinkedin(lin)}
                </div>
            </div>
        </>
    )
}

export default TeamCard;