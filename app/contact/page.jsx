"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "sonner";

//emailjs imports
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "phone",
        description: "+1 (512)956-8437",
    },
    {
        icon: <FaEnvelope />,
        title: "email",
        description: "gpraneeth.dev39@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Giants Way, Lakeville, MN-55044",
    },
];


export default function Contact() {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false)

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    function sendEmail(e) {
        e.preventDefault();
        setIsLoading(true) //loading

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
            publicKey: PUBLIC_KEY,
            })
            .then(() => {
                toast.success('Message sent successfully!')
                e.target.reset()
            },
            (error) => {
                toast.error('Failed to sent message');
            },
            ).finally(() => {
                setIsLoading(false) //stop loading
            })
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }}
            className="py-12 xl:py-18"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] xl:order-none order-2">
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="flex flex-col gap-6 p-10 rounded-xl bg-[#27272c]"
                        >
                            <h3 className="text-4xl text-accent">Let's Work Together</h3>
                            <p className="text-white/60">
                                Hello! I am currently open to new opportunities. If you have any open full-stack/ front-end roles for a React or React Native Developer, I would love to connect and discuss how I can contribute to your team.
                            </p>
                            {/* inputs */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    type="name"
                                    placeholder="Name"
                                    name='name'
                                    required
                                />
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    name='email'
                                    required
                                />
                            </div>
                            {/* text area */}
                            <Textarea
                                className="h-[200px]"
                                placeholder="Type your message here."
                                name='message'
                                required
                            />
                            {/* button */}
                            <Button size="md" className="max-w-40 py-2" disabled={isLoading}>
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </div>

                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb:8 xl:mb-0 ">
                        <ul className="flex flex-col gap-10">
                            {info.map(item => (
                                <li key={item.title} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}