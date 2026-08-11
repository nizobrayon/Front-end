import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Produtos from "../components/Produtos";
import Footer from "../components/Footer";
import Frase from "../components/Frase";

function Home (){
    return (
        <>
            <Navbar/>
            <Hero/>
            <Produtos/>
            <Frase/>
            <Footer/>
        </>
    );
}

export default Home;