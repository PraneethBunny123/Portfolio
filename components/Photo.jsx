'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Photo() {
	return (
		<div className='w-full h-full relative'>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' },
				}}>
				<div className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten'>
					<Image
						src='/assets/images/photo.png'
						priority
						fill
						quality={100}
						className='object-contain'
						alt='avatar'
					/>
				</div>
			</motion.div>
		</div>
	)
}

