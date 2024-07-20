'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Exceptional quality and content. This course has reignited my passion for music! The instructors are not only experts but also passionate about teaching. Their enthusiasm is contagious, and it's made a significant difference in my learning journey.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "I love the interactive lessons and the supportive community. This course is a game-changer! The ability to connect with other students and share experiences has made learning even more enriching. I'm grateful for the constant motivation and encouragement.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "I've learned so much in such a short time. Highly recommend this course to all music enthusiasts! The community of fellow learners is supportive, and the additional resources provided are invaluable. It's been a transformative experience for me.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "The best music course I've taken! It's engaging, thorough, and extremely well-organized. The progression of lessons is seamless, and the practical assignments are both challenging and fun. I'm thrilled with the progress I've made",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    // title: "Moby-Dick",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-4 z-10 text-white mt-4">Hear our Harmony: Voices of Success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCards