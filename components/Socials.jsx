import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const socials = [
	{
		icon: <FaGithub />,
		path: 'https://github.com/PraneethBunny123',
	},
	{
		icon: <FaLinkedinIn />,
		path: 'https://www.linkedin.com/in/praneethg39/',
	},
]

export default function Socials({ containerStyles, iconStyles }) {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => (
				<Link
					key={index}
					href={item.path}
					target='_blank'
					className={iconStyles}>
					{item.icon}
				</Link>
			))}
		</div>
	)
}

