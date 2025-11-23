import { TypographyH2 } from "@/components/ui/h1";
import { TyphographyP } from "@/components/ui/p";
import { CardProfile } from "@/components/ui/profileCard";
import { ButtonViewResume } from "@/components/ui/default-button";
import { AboutH2 } from "@/components/ui/about";
import { Pabout } from "@/components/ui/pabout";
import { ProjectH2, ToolsH2 } from "@/components/ui/ProjectH2";
import { ProjectCarousel } from "@/components/ui/cardCarousel";
import { ToolsCarousel } from "@/components/ui/toolsCarousel";

export default function Home() {
  return (
    <main className="flex-1 pl-5">
     <section className="w-full py-24 lg:py-32" id="home">
  <div className="px-4 md:px-6">
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">

         <div className="md:justify-self-end md:order-2">
        <CardProfile />
      </div>

  
      <div className="space-y-4">
        <TypographyH2 />

        <div className="space-y-4">
          <TyphographyP />

          <div className="flex gap-2">
           <ButtonViewResume/>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="w-full py-24 lg:py-32  " id="about">
  <div className="flex px-4 md:px-6 justify-center ">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center  bg-card text-card-foreground   rounded-xl border shadow-sm w-4xl h-85">
      
        <div className="space-y-4 flex flex-col items-center text-center md:col-span-2  ">
        <AboutH2 />
        <div className="space-y-4">
          <Pabout />
        </div>
      </div>

    </div>
  </div>
</section>
<section className="w-full py-24 lg:py-32" id="project">
  <div className="flex px-4 md:px-6 justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
      
      {/* Judul */}
      <div className="space-y-4 flex flex-col items-center md:col-span-2">
        <ProjectH2 />
      </div>

      {/* Carousel */}
      <div className="md:col-span-2 w-full flex justify-center">
       <ProjectCarousel />
      </div>

    </div>
  </div>
</section>

<section className="w-full py-24 lg:py-32" id="project">
  <div className="flex px-4 md:px-6 justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
      
      {/* Judul */}
      <div className="space-y-4 flex flex-col items-center md:col-span-2">
        <ToolsH2/>
      </div>
         <div className="md:col-span-2 w-full flex justify-center">
       <ToolsCarousel />
      </div>
      </div>
      </div>
</section>

    </main>
    
  );
}

