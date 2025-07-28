'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'projects',
        path: '/projects'
    },
    {
        name: 'experience',
        path: '/experience'
    },
    {
        name: 'contact',
        path: '/contact'
    },
]

export default function Nav() {
    const pathName = usePathname()
    const filteredLinks = links.filter(link => link.name !== 'contact')

    return (
        <nav className="flex gap-8">
            {filteredLinks.map(link => (
                <Link 
                    href={link.path} 
                    key={link.name}
                    className={`${link.path === pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}    
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    )
}