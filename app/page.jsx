import { FiDownload } from 'react-icons/fi'

import { Button } from '@/components/ui/button'
import Socials from '@/components/Socials'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'

const Home = () => {
	return (
		<section className='h-full'>
			<div className='container mx-auto h-full py-12 xl:py-18'>
				<div className='flex flex-col xl:flex-row justify-between items-center xl:pb-24'>

					{/* text */}
					<div className='text-center xl:text-left order-2 xl:order-none'>
                        <span className='h3 text-white/100'>Software Developer</span>
                        <h1 className='h2 text-white/80'>
                            Hello I'm <br/><span className='text-accent'>Praneeth Gunturu</span>
                        </h1>
                        
                        <p className='max-w-[500px] mb-9 text-white/80'>
                            Results-driven Software Developer with 3+ years of experience building responsive, scalable, 
                            and user-friendly web & mobile applications, with full-stack capabilities.
                        </p>

						{/* button and socials */}
						<div className='flex flex-col items-center xl:flex-row gap-8'>
                            <a href='/assets/resume.pdf' download='Praneeth_Resume.pdf'>
                                <Button
                                    variant='outline'
                                    className='uppercase flex items-center gap-2'
                                    size='lg'>
                                    <span>Download Resume</span>
                                    <FiDownload className='text-xl' />
                                </Button>
                            </a>
                            <div className='mb-8 xl:mb-0'>
                                <Socials 
                                    containerStyles='flex gap-6'
									iconStyles='w-9 h-9 flex justify-center items-center border border-accent text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500 rounded-full'
                                />
                            </div>
                        </div>
					</div>

                    {/* photo */}
					<div className='order-1 xl:order-none mb-8 xl:md-0'>
						<Photo />
					</div>
				</div>
			</div>
            {/* stats */}
            <Stats />
		</section>
	)
}

export default Home