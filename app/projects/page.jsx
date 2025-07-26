"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButton from "@/components/WorkSliderButton";


const projects = [
    {
        num: "01",
        category: "web development",
        title: "SmartHire AI",
        description: "SmartHire AI uses Google Gemini AI to simulate real interviews with feedback and evaluation. It features secure login via Clerk, a clean UI with Shadcn, and stores user data in Firebase. Users can customize interviews by role, difficulty, and domain.",
        stack: [
            { name: "React" },
            { name: "TypeScript" },
            { name: "TailwindCss" },
            { name: "ShadCn" },
            { name: "Gemini" },
            { name: "Firebase" },
            { name: "ClerkAuthentication" },
        ],
        image: "/assets/images/smarthire.png",
        github: "https://github.com/PraneethBunny123/Smart_Interview",
    },
    {
        num: "02",
        category: "Mobile development",
        title: "Meals App",
        description: "The Meals App is a React-based web app that lets users search, explore, and save meal recipes by ingredients, cuisine, or type. It offers detailed meal info and a user-friendly interface to simplify meal planning and cooking.",
        stack: [
            { name: "ReactNative" },
            { name: "JavaScript" },
            { name: "ReactNavigation" },
            { name: "ContextApi" },
            { name: "StyleSheet" },
            { name: "expo" },
        ],
        image: "/assets/images/mealsNative.jpg",
        github: "https://github.com/PraneethBunny123/native-meals",
    },
    {
        num: "03",
        category: "web development",
        title: "Foodies App",
        description: "The Foodies App is a responsive web app built with Next.js and React. It features dynamic content, real-time search, and clean UI styling using CSS modules for scoped and maintainable styles. It uses better-sqlite3 for lightweight data handling and offers a smooth food discovery experience.",
        stack: [
            { name: "NextJS" },
            { name: "React" },
            { name: "css" },
            { name: "better-Sqlite3" },
        ],
        image: "/assets/images/meals.png",
        github: "https://github.com/PraneethBunny123/Foodies-Next",
    },
    {
        num: "04",
        category: "mobile development",
        title: "Expense Traker",
        description: "The Expense Tracker App is a React Native mobile app for tracking daily expenses. It uses Context API for state management and Firebase for data storage, offering real-time entry, visual summaries, spending limits, and smooth performance on both iOS and Android.",
        stack: [
            { name: "ReactNative" },
            { name: "StyleSheet" },
            { name: "JavaScript" },
            { name: "ContextAPI" },
            { name: "expo" },
            { name: "firebase" },
        ],
        image: "/assets/images/expense.jpg",
        github: "https://github.com/PraneethBunny123/native-expense-tracker",
    },
    {
        num: "05",
        category: "web development",
        title: "Shopping Cart",
        description: "The Shopping Cart App is a React and Vite web app that lets users browse items, manage their cart, and checkout with a clean, responsive UI and efficient state management.",
        stack: [
            { name: "React" },
            { name: "JavaScript" },
            { name: "ContextAPI" },
            { name: "css" },
        ],
        image: "/assets/images/store.png",
        github: "https://github.com/PraneethBunny123/Demo-Shopping-Cart",
    },
];


export default function Contact() {
    const [project, setProject] = useState(projects[0])

    function handleSlideChange(swiper) {
        const currentIndex = swiper.activeIndex
        setProject(projects[currentIndex])
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 xl:py-18"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">

                    {/* project content */}
                    <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none xl:h-[460px]">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* project num */}
                            <div className="text-8xl font-extrabold leading-none text-outline text-transparent">
                                {project.num}
                            </div>

                            {/* category */}
                            <h2 className="font-bold text-white group-hover:text-accent capitalize transition-all duration-500 leading-none text-[42px]">
                                {project.category}
                            </h2>
                            <h3 className="text-accent text-xl capitalize">{project.title}</h3>

                            {/* description */}
                            <p className="text-white/60">{project.description}</p>

                            {/* tech stack */}
                            <div className="w-full max-w-xl">
                            <ul className="flex gap-4 flex-wrap">
                                {project.stack.map((item, index) => (
                                    <li key={index} className="text-xl text-accent">
                                        {item.name}

                                    </li>
                                ))}
                            </ul>
                            </div>
                            {/* border */}
                            <div className="border-white/20 border"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4 pb-20">
                                {/* github link */}
                                <Link href={project.github} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full items-center group bg-white/5 flex justify-center">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{project.title}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Slider */}
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            className="mb-12 gap-10"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((item, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative flex justify-center items-center group">
                                        {/* slide content */}
                                        <div className="relative h-full w-full">
                                            <Image src={item.image} alt="" fill className="object-contain"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                            {/* Custom swiper button */}
                            <WorkSliderButton
                                containerStyles="flex absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none gap-2"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                projects={projects}
                                project={project}
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}