import Link from "next/link"
import Nav from "./Nav"
import { Button } from "./ui/button"

export default function Header() {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* LOGO */}
                <Link href='/'>
					<h1 className='text-4xl font-semibold'>
						Praneeth G<span className='text-accent'>.</span>
					</h1>
				</Link>

                {/* Desktop Nav and Hire button*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href='/contact'>
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* Mobile Nav*/}
                <div className="xl:hidden">nobile nav</div>
            </div>
        </header>
    )
}