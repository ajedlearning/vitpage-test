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
                        <Link href={'/usuarios'}>Listado de Usuarios</Link>
                    </MenubarItem>
                    <MenubarItem><Link href={'/register'}>Crear usuario</Link>
                    </MenubarItem>
                    <MenubarSeparator />

                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>Productos</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Link href={'/lista-productos'}>Listado de Productos</Link>
                    </MenubarItem>
                    <MenubarItem>Crear Producto

                    </MenubarItem>
                    <MenubarSeparator />

                </MenubarContent>
            </MenubarMenu>
        </Menubar>

    )
}

export default MenuBar