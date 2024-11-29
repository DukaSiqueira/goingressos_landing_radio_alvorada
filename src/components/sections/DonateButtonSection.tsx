import { Button } from "@/components/ui/button";
import cloudSky from "@/assets/cloudy-sky.jpg";

export function DonateButtonSection() {
  return (
    <section className="w-full py-12 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${cloudSky.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container px-4 md:px-6 mx-auto relative">
        <div className="flex justify-center">
          <Button size="lg" className="bg-[#123e73] hover:bg-[#17365d] text-xl px-8 py-6">
            DOE AGORA E TRANSFORME VIDAS
          </Button>
        </div>
      </div>
    </section>
  );
} 