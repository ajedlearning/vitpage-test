import MenuBar from "@/components/MenuBar";
import SideNav from "@/components/SideNav";


function layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full border border-green-950">
            <header className="w-full  h-20 border border-slate-600">
                <nav className="p-4"><MenuBar /></nav>
            </header>
            <main className="w-full min-h-screen  p-4">
               
                    {children}
               
            </main>
        </div>
    )
}

export default layout   