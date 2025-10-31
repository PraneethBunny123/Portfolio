'use client'
import CountUp from 'react-countup'
import { useState } from 'react'

const stats = [
	{
		num: 4,
		text: 'Years of Experience',
	},
	{
		num: 15,
		text: 'Technologies Mastered',
	},
    {
		num: 50,
		text: 'Projects Completed',
	},
	{
		num: 1100,
		text: 'GitHub Contributions',
	},
]

export default function Stats() {
    const [completed, setCompleted] = useState(Array(stats.length).fill(false))

	const handleEnd = (index) => {
		setCompleted(prev => {
			const updated = [...prev]
			updated[index] = true
			return updated
		})
	}

    return (
        <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
			<div className='container mx-auto'>
				<div className='flex flex-wrap max-w-[80vw] mx-auto xl:max-w-none gap-6'>
					{stats.map((item, index) => (
						<div
							key={index}
							className='flex-1 flex gap-6 items-center justify-center xl:justify-start'
                        >
							<div className='text-3xl xl:text-4xl font-bold'>
								<CountUp
									end={item.num}
									duration={5}
									delay={2}
									onEnd={() => handleEnd(index)}
								/>
								{completed[index] && '+'}
							</div>
							<p
								className={`${
									item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
								} leading-snug text-white/80`}>
								{item.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
    )
}