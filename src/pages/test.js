import { useState } from "react";

const Test = () => {
    const [isC, setIsC] = useState(false);
    const [pub, setPub] = useState(false);
    const [pri, setPri] = useState(false);

    return (
        <>
            {isC ? (
                <>
                    {pub && <div>Public</div>}
                    {pri && <div>Private</div>}
                </>
            ) : (
                <div>Connect</div>
            )}
            <button
                onClick={() => {
                    setIsC(!isC);
                }}
                className="px-7 py-2 bg-red-500 m-5"
            >
                Connect
            </button>
            <button
                onClick={() => {
                    setPub(!pub);
                }}
                className="px-7 py-2 bg-red-500 m-5"
            >
                Public
            </button>
            <button
                onClick={() => {
                    setPri(!pri);
                }}
                className="px-7 py-2 bg-red-500 m-5"
            >
                Private
            </button>
        </>
    );
};

export default Test;
