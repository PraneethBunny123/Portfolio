'use client'

// Font Awesome
import { FaHtml5, FaCss3, FaJs, FaReact, FaGithub } from "react-icons/fa";

// Simple Icons
import {
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiC,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiGraphql,
  SiApollographql,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiJest,
  SiTestinglibrary,
  SiPostman,
  SiGit,
  SiEclipseide,
  SiIntellijidea,
  SiJirasoftware,
  SiVite,
  SiNpm,
  SiYarn,
  SiExpo,
  SiAndroidstudio,
  SiXcode,
  SiWebpack,
  SiBabel,
  SiJson,
  SiAxios,
  SiAmazonec2,
  SiAmazons3,
  SiAwslambda,
  SiAmazoncloudwatch
} from "react-icons/si";



import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const about = {
    title: "About me",
    description: "Results-driven Software Developer with nearly 3+ years of experience building responsive and scalable web applications using React.js. Strong proficiency in JavaScript, HTML, CSS, and modern UI/UX principles, with hands-on experience in state management and component-based architecture. Familiar with full-stack concepts, including Node.js and Express.js, but primarily focused on front-end development. Passionate about writing clean, efficient code and optimizing performance to enhance user experience. Eager to contribute to innovative projects and grow as a developer.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Praneeth Gunturu",
        },
        {
            fieldName: "Phone",
            fieldValue: "+1 (512)956-8437",
        },

        {
            fieldName: "Experience",
            fieldValue: "3+ Years",
        },

        {
            fieldName: "Email",
            fieldValue: "gpraneeth.dev39@gmail.com",
        },
    ],
};

const experience = {
    icon: "",
    title: "My Experience",
    description: "Full-stack-leaning Frontend Developer with 3+ years of experience building responsive, high-performance web and mobile applications. Proficient in React, React Native, Redux, React Query, and modern UI/UX design. Delivered scalable cross-platform solutions and optimized data flow with advanced caching and background sync. Strong focus on clean code, accessibility (WCAG), testing (90–95% coverage with RTL/Jest), and performance optimization. Proven track record of improving app stability, responsiveness, and user satisfaction across projects.",
    items: [
        {
            company: "MetaHub IT Solutions",
            position: "Software Developer",
            duration: "June 2024 - May 2025",
        },
        {
            company: "iOPEX Technologies",
            position: "Software Engineer",
            duration: "June 2021 - July 2023",
        },
    ],
};

const education = {
    icon: "",
    title: "My Education",
    description: "I completed my Master of Science (MS) degree from TAMUCC, where I gained a solid foundation in computer science. During my time at the college, I developed a strong understanding of core programming concepts, data structures, algorithms, and software development methodologies. Additionally, I built projects and earned certifications, gaining hands-on skills in web and mobile development.",
    items: [
        {
            institution: "Texas A&M University - Corpus Christi",
            degree: `Master of Science`,
            duration: "2016-2020",
        },
    ],
};

const skills = {
    title: "My Skills",
    description: `I am a Full-stack-leaning Frontend Developer skilled in JavaScript, TypeScript, Python, and Java, with hands-on experience in React.js, React Native, Next.js, and Node.js. I build responsive apps using Tailwind CSS and manage state with Redux and Context API. I work with REST and GraphQL APIs using Axios, Fetch, and React Query.
    I have experience with AWS (EC2, S3, Lambda), basic CI/CD, and testing tools like Jest and React Testing Library. I’m also proficient with MongoDB, Firebase, PostgreSQL, and MySQL. I use Git, GitHub, VS Code, and modern build tools like Vite, Webpack, and Babel to streamline development.`,
    skillsList: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <SiPython />, name: "Python" },
        { icon: <SiC />, name: "C" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiFirebase />, name: "Firebase" },
        { icon: <SiNodedotjs />, name: "Node.js" },
        { icon: <FaReact />, name: "React.js" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <SiGraphql />, name: "GraphQL" },
        { icon: <SiApollographql />, name: "Apollo GraphQL" },
        { icon: <SiReactquery />, name: "React Query" },
        { icon: <SiReactrouter />, name: "React Router" },
        { icon: <SiRedux />, name: "Redux" },
        { icon: <SiJest />, name: "Jest" },
        { icon: <SiTestinglibrary />, name: "React Testing Library" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <SiGit />, name: "Git" },
        { icon: <SiEclipseide />, name: "Eclipse" },
        { icon: <SiIntellijidea />, name: "IntelliJ IDEA" },
        { icon: <SiJirasoftware />, name: "Jira" },
        { icon: <SiVite />, name: "Vite" },
        { icon: <SiNpm />, name: "npm" },
        { icon: <SiYarn />, name: "yarn" },
        { icon: <SiExpo />, name: "Expo" },
        { icon: <SiAndroidstudio />, name: "Android Studio" },
        { icon: <SiXcode />, name: "Xcode" },
        { icon: <SiWebpack />, name: "Webpack" },
        { icon: <SiBabel />, name: "Babel" },
        { icon: <SiJson />, name: "JSON" },
        { icon: <SiAxios />, name: "Axios" },
        { icon: <SiAmazonec2 />, name: "EC2" },
        { icon: <SiAmazons3 />, name: "S3" },
        { icon: <SiAwslambda />, name: "Lambda" },
        { icon: <SiAmazoncloudwatch />, name: "CloudWatch" },
    ]
};

export default function Resume() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex justify-center items-center py-12 xl:py-18"
        >
            <div className="container mx-auto border-yellow-200">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience"> Experience</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col text-center gap-[30px] xl:text-left">
                                <h3 className="font-bold text-4xl">{experience.title}</h3>
                                <p className="text-white/60">{experience.description}</p>

                                <ScrollArea className='h-[400px]'>
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item,index) => (
                                            <li 
                                                key={index} 
                                                className="bg-[#232329] flex h-[184px] flex-col justify-center items-center gap-1 py-6 px-10 lg:items-start rounded-xl"
                                            >
                                                <span className="text-accent">{item.duration}</span>

                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>

                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>

                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px] ">
                                <div className="flex flex-col text-center gap-[30px] xl:text-left">
                                    <h3 className="font-bold text-4xl">{skills.title}</h3>
                                    <p className="text-white/60">{skills.description}</p>
                                </div>

                                <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:gap-[30px] lg:grid-cols-5 xl:grid-cols-6 gap-4">
                                    {skills.skillsList.map((skill,index)=>(
                                        <li key={index} className=" ">
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip >
                                                    <TooltipTrigger className="w-full h-[120px] rounded-xl flex justify-center bg-[#232329] items-center group">
                                                        <div className="text-5xl group-hover:text-accent transition-all duration-300 ">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col text-center gap-[30px] xl:text-left">

                                <h3 className="font-bold text-4xl">{education.title}</h3>
                                <p className="text-white/60">{education.description}</p>

                                <ScrollArea className='h-[400px]'>
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item,index)=>(
                                            <li 
                                                key={index} 
                                                className="bg-[#232329] flex h-[184px] flex-col justify-center items-center gap-1 py-6 px-10 lg:items-start w-[400px] rounded-xl"
                                            >
                                                <span className="text-accent">{item.duration}</span>

                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>

                                                <div className="flex gap-3 items-center">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>

                            </div>
                        </TabsContent>
                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
				
                                <h3 className="font-bold text-4xl">{about.title}</h3>
                                <p className="text-white/60">{about.description}</p>
                                
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0 max-w-[700px]">
                                    {about.info.map((item,index)=>(
                                        <li key={index} className="flex justify-center items-center gap-4 xl:justify-start">
                                            <span className="text-white/60">{item.fieldName} </span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}