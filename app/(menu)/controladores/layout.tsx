import BannerControllers from "@/app/components/BannerControllers";


export default async function ControllersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <section className="pt-28">
    <BannerControllers/>
    {children}
   </section>
  );
}
