'use client'
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
        title: "Melody Masters: Your Gateway to Musical Excellence",
        description:
            "Unlock your musical potential with Melody Masters, where passion meets precision. Our expertly designed courses cater to all skill levels, providing you with the tools to master your instrument, understand music theory, and compose your own pieces. Join our community of dedicated musicians and take your skills to new heights.",
    },
    {
        title: "Rhythmic Rhapsody: The Ultimate Music Learning Hub",
        description:
            "Dive into the world of music with Rhythmic Rhapsody, your all-in-one platform for comprehensive music education. From beginner lessons to advanced techniques, our courses are crafted by seasoned musicians to ensure you gain practical skills and theoretical knowledge. Start your musical journey with us today and let your creativity flow",

    },
    {
        title: "SoundScape Academy: Where Music Dreams Come True",
        description:
            "Transform your musical dreams into reality with SoundScape Academy. Our diverse range of courses covers everything from instrument mastery and vocal training to music production and composition. Led by industry professionals, our lessons are tailored to inspire and guide you every step of the way. Start creating your unique sound today.",
    },
    {
        title: "Harmony Haven: Online Music Courses for All Ages",
        description:
            "Experience the joy of music with Harmony Haven, offering a wide range of courses for musicians of all ages. Whether you're picking up an instrument for the first time or looking to enhance your existing talents, our interactive and engaging lessons are designed to fit your pace and goals. Discover the harmony within you.",
    },
];


function WhyChooseUs() {
    return (
        <div>
            <StickyScroll content={content} />
        </div>
    )
}

export default WhyChooseUs