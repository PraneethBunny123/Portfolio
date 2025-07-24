import { FiDownload } from 'react-icons/fi'

import { Button } from '@/components/ui/button'

const Home = () => {
	return (
		<section className='h-full'>
			<div className='container mx-auto h-full'>
				<div className='flex flex-col xl:flex-row justify-between items-center xl:pb-24'>

					{/* text */}
					<div className='text-center xl:text-left order-2 xl:order-none'>
                        <span className='h3 text-white/100'>Software Developer</span>
                        <h1 className='h2 text-white/80'>
                            Hello I'm <br/><span className='text-accent'>Praneeth G</span>
                        </h1>
                        
                        <p className='max-w-[500px] mb-9 text-white/80'>
                            Results-driven Software Developer with 3+ years of experience building responsive, scalable, 
                            and user-friendly web & mobile applications, with full-stack capabilities.
                        </p>

						{/* button and socials */}
						<div className='flex flex-col items-center xl:flex-row gap-8'>
                            <Button
								variant='outline'
								className='uppercase flex items-center gap-2'
								size='lg'>
								<span>Download Resume</span>
								<FiDownload className='text-xl' />
							</Button>
                            <div>Socials</div>
                        </div>
					</div>

					
				</div>
			</div>
		</section>
	)
}

export default Home