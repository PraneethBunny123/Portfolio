'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
	{
		num: '01',
		title: 'Web Development',
		description:
            'I specialize in building fast, scalable, and accessible web applications using React.js, TypeScript, and Next.js. I focus on clean, modular front-end architecture with optimized performance using server-side rendering (SSR) and static site generation (SSG). For data handling, I utilize React Query, RESTful APIs, and GraphQL to ensure efficient and flexible data fetching. I design responsive UIs with Tailwind CSS, semantic HTML, and follow WCAG accessibility standards. I prioritize robust testing using Jest and React Testing Library (RTL), and apply modern UI/UX principles to create seamless, user-friendly experiences. With hands-on experience in cloud platforms like AWS (EC2, S3, Lambda) and basic CI/CD, I contribute to high-performance, production-ready solutions.'
	},
	{
		num: '02',
		title: 'Mobile Development',
		description:
            'I develop high-quality mobile applications using React Native, enabling consistent and responsive experiences across both iOS and Android from a single codebase. I focus on performance optimization through techniques like lazy loading, modular architecture, and memory-efficient rendering. For state management, I implement scalable solutions using Redux or Context API. I design smooth and intuitive navigation flows with React Navigation and build modern, accessible UIs using reusable components and clean layouts. With strong debugging practices using tools like React Native Debugger and Chrome DevTools, I deliver polished, fast, and maintainable mobile apps.'
	},
]

export default function Contact() {
    return (
        <section className='min-h-[80vh] flex flex-col py-12 xl:py-18 justify-start'>
			<div className='container mx-auto'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
					}}
					className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
					{services.map(service => (
						<div
							key={service.num}
							className='flex flex-col justify-between h-full group'>

							{/* title + description */}
                            <div className='flex flex-col gap-6'>
                                <h2 className='text-[42px] font-bold leading-none text-white  group-hover:text-accent transition-all duration-500'>
                                    {service.title}
                                </h2>
                                <p className='text-white/60'>{service.description}</p>
                            </div>
							{/* border */}
							<div className='border-b border-white/20 w-full'></div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
    )
}