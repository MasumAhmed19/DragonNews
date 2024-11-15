import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layoutComponents/leftNavbar";
import RIghtNavBar from "../components/layoutComponents/RIghtNavBar";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
    return (
        <div className="container mx-auto font-poppins">
            <Header />
            <LatestNews />
            <NavBar />

            <main className="grid md:grid-cols-12 gap-5 p-2 mt-5">
                <aside className="col-span-3"><LeftNavbar/></aside>
                <section className="col-span-6"><Outlet/></section>
                <aside className="col-span-3"><RIghtNavBar /></aside>
            </main>

        </div>
    );
};

export default HomeLayout;