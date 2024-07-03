import MainNavBar from "@/app/components/MainNavBar";
import Footer from "../components/Footer";





export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <>   
        
        <MainNavBar />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer/>
    </> 


    
   
  );
}
