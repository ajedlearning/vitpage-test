import Banner from "@/app/components/Banner";
import NavBarProducts2 from "@/app/components/NavBarProducts2";
import {getProductCategories} from '@/app/lib/data'

export default async function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getProductCategories();
  return (
   <div className="pt-28">
    <Banner/>
    
    <NavBarProducts2 categories={categories}/> 
    {children}
   </div>
  );
}
