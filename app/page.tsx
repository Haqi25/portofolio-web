import { TypographyH2 } from "@/components/ui/h1";
import { TyphographyP } from "@/components/ui/p";
import { CardProfile } from "@/components/ui/profileCard";
import { ButtonViewResume } from "@/components/ui/default-button";
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
    </main>
  );
}
