import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation';

interface ChildComponentProps {
  onClickButton: () => void;
}

const links = [
  {
    name: 'INICIO',
    href: '/',
  },
  {
    name: 'NOSOTROS',
    href: '/nosotros',
  },
  {
    name: 'PRODUCTOS',
    href: '/productos',
  },
  {
    name: 'NOTICIAS',
    href: '/noticias',
  },
  {
    name: 'SOPORTE',
    href: '/soporte',
  },
  {
    name: 'VENTAS',
    href: '/ventas',
  },
  {
    name: 'CONTACTO',
    href: '/contacto',
  }
]
export const LinkNavbar = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((ln) => (

        <Link
          href={ln.href}
          className={clsx('hover:text-blue-600 text-gray-500 rounded-md px-3 py-2 text-sm font-medium', {'text-blue-600': pathname === ln.href })}
          aria-current="page"
          key={ln.name}
        >
          {ln.name}
        </Link>
      ))}

    </>
  )
}

export const LinkMobileNavbar = ({ onClickButton }: ChildComponentProps) => {


  return (
    <>
      {links.map((ln) => (

        <Link
          href={ln.href}
          className="text-white block rounded-md px-3 py-2 text-base font-medium"
          aria-current="page"
          key={ln.name}
          onClick={onClickButton}

        >
          {ln.name}
        </Link>
      ))}
    </>
  )
}
