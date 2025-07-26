"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";


const projects = [
    {
        num: "01",
        category: "web development",
        title: "AI mock interview application",
        description:
            "Ai Mock Interview Application leverages Google Gemini AI to create realistic interview scenarios, offering users the opportunity to practice, receive evaluations, and get personalized feedback. Seamless Authentication, powered by Clerk, ensures secure and efficient access control for users. The application features an intuitive, modern interface built with Shadcn UI, providing a smooth and responsive user experience. All user progress, interview analytics, and configurations are securely managed in Google Firebase Firestore. Additionally, Dynamic Interview Customization allows users to tailor mock interviews based on job roles, difficulty levels, and specific domains, enhancing the preparation experience.",
        stack: [
            { name: "React" },
            { name: "TypeScript" },
            { name: "TailwindCss" },
            { name: "ShadCn" },
            { name: "GoogleGeminiAI" },
            { name: "FirebaseFirestore" },
            { name: "ClerkAuthentication" },
        ],
        image: "/assets/images/smarthire.png",
        github: "https://github.com/PraneethBunny123/Smart_Interview",
    },
    {
        num: "02",
        category: "Mobile development",
        title: "Meals App",
        description:
            "The Meals App is a React-based application designed to help users discover, browse, and explore a variety of meal recipes. It allows users to search for meals based on specific criteria like ingredients, meal types, or cuisine. The app provides detailed information about each meal, including ingredients, instructions, and possibly nutritional information. Users can easily browse through different categories of meals and save their favorite meals for future reference. With an intuitive user interface and dynamic functionality, the Meals App aims to enhance the meal planning and cooking experience by making it easy to find and organize meals.",
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
        description: "The Foodies App is a web application built with Next.js and React that allows users to explore a variety of meals with engaging visuals and icons. It features a clean UI, real-time search, and dynamic content rendering. Data is efficiently handled using better-sqlite3 for lightweight database operations, with security considerations like xss protection integrated. This project showcases a responsive and user-friendly food discovery experience.",
        stack: [
            { name: "NextJS" },
            { name: "React" },
            { name: "xss" },
            { name: "JS" },
            { name: "MealIcons" },
            { name: "better-Sqlite3" },
        ],
        image: "/assets/images/meals.png",
        github: "https://github.com/PraneethBunny123/Foodies-Next",
    },
    {
        num: "04",
        category: "mobile development",
        title: "Expense Traker",
        description: `The Expense Tracker App is a cross-platform mobile application built with React Native for both iOS and Android. It allows users to record, categorize, and monitor their daily expenses in real-time. Featuring an intuitive UI, the app provides visual summaries of spending patterns, supports data persistence, and enables users to set spending limits for better financial control. This project showcases efficient state management, responsive design, and seamless mobile performance.`,
        stack: [
            { name: "ReactNative" },
            { name: "StyleSheet" },
            { name: "JavaScript" },
            { name: "ContextAPI" },
            { name: "expo" },
        ],
        image: "/assets/images/expense.jpg",
        github: "https://github.com/PraneethBunny123/native-expense-tracker",
    },
    {
        num: "05",
        category: "web development",
        title: "Shopping Cart",
        description: `The Shopping Cart App is a modern web application developed using React and Vite. It enables users to browse items, add them to a cart, update quantities, and proceed to checkout. The app features dynamic cart updates, efficient state management, and a clean, responsive UI for a seamless user experience. This project highlights practical e-commerce functionality and performance-focused front-end development.`,
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
    return (
        <div>
            Contact
        </div>
    )
}