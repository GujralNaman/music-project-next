'use client'

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinar() {

  const featuredWebinars = [
    {
      title: "Mastering Music Theory: Foundations and Beyond",
      description:
        "Explore music theory fundamentals and advanced concepts to enhance your compositional skills",
      link: "#",
    },
    {
      title: "The Art of Improvisation: Techniques for All Instruments",
      description:
        "Learn improvisation techniques to boost your creativity and spontaneity on any instrument",
      link: "#",
    },
    {
      title: "Home Studio Essentials: Recording and Production",
      description:
        "Discover how to set up and use a home studio for professional-quality music recording and production.",
      link: "#",
    },
    {
      title: "Vocal Mastery: Techniques for Singer",
      description:
        "Improve your vocal technique, control, and expression with expert tips and exercises.",
      link: "#",
    },
    {
      title: "Songwriting Secrets: Crafting Memorable Songs",
      description:
        "Get insights into writing compelling lyrics, melodies, and harmonies from industry professionals",
      link: "#",
    },
    {
      title: "Live Performance Tips: Engaging Your Audience",
      description: "Learn practical tips to enhance your stage presence and connect with your audience during live performances",
      link: "#",
    },
  ]
  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="uppercase text-base text-teal-600 font-semibold tracking-wide">Featured webinars</h2>
                <p className="capitalize text-white mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">Enhance your musical journey</p>
            </div>
            <div className="mt-10">
              <HoverEffect items={featuredWebinars} />
            </div>
            <div className="mt-10 text-center">
              <Link href={"/"} className="capitalize px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                View all webinars
              </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinar