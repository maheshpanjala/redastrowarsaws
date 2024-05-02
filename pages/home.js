import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Passes from "../components/passes";
import Docs from "../components/docs";
import Meenetwork from "../components/meenetwork";

const Home = () => {
    return (
        <>
            <div className=" bg-black  main-container">
                <Navbar />
                <Meenetwork page="home" />
                <Docs page="home"/>
                <Passes />
                <Footer />
            </div>
        </>
    );
};

export default Home;
