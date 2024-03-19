import NavBarProducts2 from "@/app/components/NavBarProducts2";


export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="pt-28">
    <h2 className=" text-2xl md:text-4xl lg:text-5xl font-bold p-2 text-center ">PRODUCTOS</h2>
    <NavBarProducts2/> 
    {children}
   </div>
  );
}
