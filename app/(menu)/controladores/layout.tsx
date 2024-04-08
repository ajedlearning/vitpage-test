import BannerControllers from "@/app/components/BannerControllers";


export default async function ControllersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="pt-28">
    <BannerControllers/>
    {children}
   </div>
  );
}
