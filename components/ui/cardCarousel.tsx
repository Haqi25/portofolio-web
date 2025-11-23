import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ButtonViewWeb } from "./default-button"

export function ProjectCarousel() {
  const projects = [
    {
      id: 1,
      title: "Interactive Coding Tutorial Site",
      desc: "A website offering interactive coding tutorials and challenges to help users learn programming languages through practice.",
      img: "/img/projects/project1.png",
      tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Eco-friendly Product Marketplace",
      desc: "An eco-commerce platform dedicated to sustainable products users can buy, sell, and learn about sustainable living.",
      img: "/img/projects/project2.png",
      tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: "Fitness Tracker App",
      desc: "A mobile app that helps users track fitness activities, set goals, and monitor progress.",
      img: "/img/projects/project3.png",
      tech: ["HTML", "CSS", "JavaScript", "React Native", "Node.js", "MongoDB"],
    },
  ]

  return (
    <Carousel className="w-full max-w-6xl"> 
      <CarouselContent>
        
        {projects.map((item) => (
          <CarouselItem key={item.id} className="basis-4/5 md:basis-1/3">
  <Card className="bg-[#1a1a1a] text-white rounded-xl border border-neutral-800 shadow-lg overflow-hidden h-full flex flex-col">
    
    {/* IMAGE */}
    <div className="relative w-full h-48">
      <Image 
       src="https://avatars.githubusercontent.com/u/6880091?v=4"
        alt={item.title}
        fill
        className="object-cover"
      />
    </div>

    {/* CONTENT */}
    <CardContent className="p-5 flex flex-col flex-grow">
      
      {/* TITLE */}
      <h3 className="text-xl font-semibold">{item.title}</h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-400 leading-relaxed flex-grow">
        {item.desc}
      </p>

   

      {/* INFO ICON */}
      <div className="flex justify-end pt-3 cursor-pointer">
        <ButtonViewWeb/>
      </div>

    </CardContent>

  </Card>
</CarouselItem>

        ))}

      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
