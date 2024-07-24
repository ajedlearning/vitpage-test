import Carousel from "@/app/components/Carousel";
import About from "@/app/components/About";
import Philosophy from "@/app/components/Philosophy";
import AboutImage from "@/app/components/AboutImage";
import HomeVideo from "@/app/components/HomeVideo";
import { getProducts, getProductCategories } from '@/app/lib/data'
import ShowProducts from "@/app/components/ShowProducts";
import NavBarProducts2 from "@/app/components/NavBarProducts2";
import InstitutionalSales from "@/app/components/InstitutionalSales";
import Contact from "@/app/components/Contact";
import BannerHomeSupport from "./components/BannerHomeSupport";
import BannerHomeControllers from "./components/BannerHomeControllers";
import MainNavBar from "./components/MainNavBar";
import Footer from "./components/Footer";


export default async function Home() {
  const products = await getProducts();
  const categories = await getProductCategories();
  return (

    <>
      <MainNavBar/>
      <Carousel />
      <About />
      <Philosophy />
      <AboutImage />
      <HomeVideo />
      <NavBarProducts2 categories={categories} url="mi_url" title="PRODUCTOS" />
      <ShowProducts products={products} />

      <BannerHomeSupport />
      <BannerHomeControllers/>
      <InstitutionalSales />
      <Contact />
      <Footer/>

    </>



  );
}
