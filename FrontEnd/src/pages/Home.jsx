import FilterMain from "../Components/FilterMain/FilterMain";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import SearchBar from "../Components/SearchBar/SearchBar";
import Main from "../Components/Main/Main";
import { Outlet } from "react-router-dom";
function Home(){
    return (
        <>
            <Navbar isLoggedIn={false}/>
            <FilterMain/>
            <SearchBar/>
            <Outlet/>
            <Footer/>
        </>
    );
}
export default Home;