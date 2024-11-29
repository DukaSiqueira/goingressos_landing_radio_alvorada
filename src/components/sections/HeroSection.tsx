import Image from "next/image";
import { Button } from "@/components/ui/button";
import cloudSky from "@/assets/cloudy-sky.jpg";

export function HeroSection() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-8 relative overflow-hidden text-white">
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
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-6 [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%),_4px_4px_8px_rgb(0_0_0_/_30%)]">
            Participe do Clube do Ouvinte Coração Missionário e leve a
            mensagem de Deus ainda mais longe!
          </h1>
          <p className="text-[#f2f2f2] md:text-xl mb-8 max-w-3xl font-medium">
            Sua contribuição ajuda a Rádio Alvorada a espalhar fé, esperança e
            amor para milhares de famílias. Juntos, podemos transformar vidas
            e fortalecer nossa missão de evangelizar. Faça parte desta obra de
            Deus!
          </p>
          <Button size="lg" className="bg-[#123e73] hover:bg-[#17365d]">
            DOE AGORA
          </Button>
        </div>
      </div>
    </section>
  );
} 