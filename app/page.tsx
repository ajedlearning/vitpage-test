import Carousel from "@/app/components/Carousel";
import About from "@/app/components/About";
import Philosophy from "@/app/components/Philosophy";
import AboutImage from "@/app/components/AboutImage";
import HomeVideo from "@/app/components/HomeVideo";
import { getProducts } from '@/app/lib/data'
import ShowProducts from "./components/ShowProducts";
import NavBarProducts2 from "./components/NavBarProducts2";


export default async function Home() {
  const products = await getProducts();
  return (

    <>

      <Carousel />
      <About />
      <Philosophy />
      <AboutImage />
      <HomeVideo />
      <NavBarProducts2 />

      <ShowProducts products={products} />




    </>



  );
}
