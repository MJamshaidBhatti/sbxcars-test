// import Image from "next/image";/
import  Header from "../components/Header"
import  Banners from "../components/Banners"
import  Cards from "../components/Cards"
import  Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="">
        <Header />
        <Banners />
        <Cards />
        <Footer />
    </div>
  );
}
