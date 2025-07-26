"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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
        description: "1515 Ennis Joslin Rd, Corpus Christi, TX-78412",
    },
];


export default function Contact() {
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
                                />
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    name='email'
                                />
                            </div>
                            {/* text area */}
                            <Textarea
                                className="h-[200px]"
                                placeholder="Type your message here."
                                name='message'
                            />
                            {/* button */}
                            <Button size="md" className="max-w-40 py-2">
                                send message
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