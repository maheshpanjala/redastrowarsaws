import Games from "../components/Games";
import Header from "../components/Header";
const DashBoard = () => {
    return (
        <div className="bg-black main-container">
            <div className="flex flex-col text-black dark:text-white  justify-between p-[20px] gap-[72px]">
                <Header />
                <Games />
            </div>
        </div>
    );
};

export default DashBoard;