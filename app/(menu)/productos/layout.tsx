import Banner from "@/app/components/Banner";
import NavBarProducts2 from "@/app/components/NavBarProducts2";


export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="pt-28">
    <Banner/>
    
    <NavBarProducts2/> 
    {children}
   </div>
  );
}
