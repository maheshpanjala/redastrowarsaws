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
        </>
    );
}

export default AvatarCard;