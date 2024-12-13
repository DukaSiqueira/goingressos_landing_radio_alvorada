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
          <a
            href={`https://www.goingressos.com.br/acesso/login-alvorada`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-8 bg-[#123e73] hover:bg-[#17365d] text-white"
          >
            DOE AGORA E TRANSFORME VIDAS
          </a>
        </div>
      </div>
    </section>
  );
}
