import Image from "next/image";

const AvatarCard = ({ avatar, name, desc }) => {
    return (
        <>
            <div className="avatarCard rounded-[14px] md:rounded-[24px] w-[104px] h-[179px] md:w-[350px] md:h-[500px]">
                <div className="w-[104px] md:w-[350px]">
                    <Image
                        src={avatar}
                        alt={name}
                        width={350}
                        height={350}
                        className="rounded-xl"
                    />
                </div>
                <div className="flex flex-col justify-center items-center text-center text-white mx-auto md:mt-3 space-y-2 md:space-y-3">
                    <h1 className="font-bold text-[8px] md:text-[28px]">
                        {name}
                    </h1>
                    <p className="text-[8px] md:text-[14px] px-5">
                        {desc}
                    </p>
                </div>
            </div>
            <style jsx>{`
            .avatarCard {
                // width: 310px;
                // height: 413px;
                background: #262626;
                box-shadow: 0px 0px 60px -30px rgba(255, 255, 255, 0.15);
                // border-radius: 24px;
                transition: all 200ms ease-out;
            }

            .avatarCard:hover {
                box-shadow: 0px 0px 23px 8px rgba(255, 255, 255, 0.2);
                transform: scale(1.05);
                transition: all 200ms ease-in;
            }

            .avatarCard:hover p {
                font-weight: bold;
            }
            `}</style>
        </>
    );
}

export default AvatarCard;