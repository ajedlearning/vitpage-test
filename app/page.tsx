import Carousel from "@/app/components/Carousel";
import About from "@/app/components/About";
import Philosophy from "@/app/components/Philosophy";
import AboutImage from "@/app/components/AboutImage";
import HomeVideo from "@/app/components/HomeVideo";
import { getProducts, getProductCategories } from '@/app/lib/data'
import ShowProducts from "@/app/components/ShowProducts";
import NavBarProducts2 from "@/app/components/NavBarProducts2";
import TecnicalSupport from "@/app/components/TecnicalSupport";
import ProductControllers from "@/app/components/ProductControllers";
import InstitutionalSales from "@/app/components/InstitutionalSales";
import Contact from "@/app/components/Contact";
import BannerHomeSupport from "./components/BannerHomeSupport";


export default async function Home() {
  const products = await getProducts();
  const categories = await getProductCategories();
  return (

    <>

      <Carousel />
      <About />
      <Philosophy />
      <AboutImage />
      <HomeVideo />
      <NavBarProducts2 categories={categories} />
      <ShowProducts products={products} />
      <h2 className=" text-2xl md:text-4xl lg:text-5xl font-bold p-2 text-center ">SOPORTE TÉCNICO</h2>

      <BannerHomeSupport />
      <ProductControllers />
      {/* <TecnicalSupport /> */}
      <InstitutionalSales />
      <Contact />

    </>



  );
}
