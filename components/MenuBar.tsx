import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import LogoutButton from "./LogoutButton"
import Link from "next/link"

const MenuBar = () => {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>Archivo</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <LogoutButton />
                    </MenubarItem>

                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>Usuarios</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Link href={'/users'}>Listado de Usuarios</Link>
                    </MenubarItem>
                    <MenubarItem><Link href={'/users/add'}>Crear usuario</Link>
                    </MenubarItem>
                    <MenubarSeparator />

                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>Productos</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Link href={'/vitproducts'}>Listado de Productos</Link>
                    </MenubarItem>
                    <MenubarItem>
                    <Link href={'/vitproducts/add'}>Crear Producto</Link>
                    </MenubarItem>
                    <MenubarItem>
                    <Link href={'/vitproducts/add'}>Versiones de Productos</Link>
                    </MenubarItem>
                    <MenubarSeparator />

                </MenubarContent>
            </MenubarMenu>
        </Menubar>

    )
}

export default MenuBar