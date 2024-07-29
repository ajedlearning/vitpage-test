import SideNav from "@/components/SideNav";


function layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full border border-green-950">
            <header className="w-full h-20 border border-red-500">
                header
            </header>
            <main className="flex w-full min-h-screen bg-yellow-400">
                <nav className="w-[30%] p-4 bg-slate-600">
                    <SideNav />
                </nav>
                <section className="p-4">
                    {children}
                </section>
            </main>
        </div>
    )
}

export default layout   