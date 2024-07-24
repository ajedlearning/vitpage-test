import BannerControllers from "@/app/components/BannerControllers";

export default  function SupportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="pt-28">
    <BannerControllers />    

    {children}
   </div>
  );
}
