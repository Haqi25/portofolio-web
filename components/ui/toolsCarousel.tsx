"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ToolsCarousel() {
  const projects = [
    { id: 1, title: "Interactive Coding Tutorial Site", img: "/img/projects/project1.png" },
    { id: 2, title: "Eco-friendly Product Marketplace", img: "/img/projects/project2.png" },
    { id: 3, title: "Fitness Tracker App", img: "/img/projects/project3.png" },
    { id: 4, title: "Fitness Tracker App", img: "/img/projects/project3.png" },
    { id: 5, title: "Fitness Tracker App", img: "/img/projects/project3.png" },
  ];

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full max-w-7xl"
    >
      <CarouselContent>
        {projects.map((item) => (
          <CarouselItem
            key={item.id}
            className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
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

              {/* TITLE */}
              <CardContent className="p-5 flex flex-col flex-grow justify-center">
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </CardContent>

            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

     
    </Carousel>
  );
}
