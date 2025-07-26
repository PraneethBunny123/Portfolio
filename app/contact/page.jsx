"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useState } from "react";

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
        <div>
            Contact
        </div>
    )
}