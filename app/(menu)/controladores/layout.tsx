import BannerControllers from "@/app/components/BannerControllers";
import NavBarProducts2 from "@/app/components/NavBarProducts2";
import {getProductCategories} from '@/app/lib/data'

export default async function ControllersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const productCategories = await getProductCategories();
  return (
    <section className="pt-28">
      <BannerControllers />
      <NavBarProducts2 categories={productCategories} title="CONTROLADORES" url="controladores" />
      {children}
    </section>
  );
}
