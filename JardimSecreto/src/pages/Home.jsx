import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Produto from "../components/Produtos";
import Frase from "../components/Frase";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero/>
            <Produto/>
            <Frase/>
            <Footer/>
        </>
    );
}

export default Home;