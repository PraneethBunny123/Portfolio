import Link from "next/link"

export default function Header() {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto">
                {/* LOGO */}
                <Link href='/'>
					<h1 className='text-4xl font-semibold'>
						Praneeth G<span className='text-accent'>.</span>
					</h1>
				</Link>

                {/* Desktop Nav */}
            </div>
        </header>
    )
}