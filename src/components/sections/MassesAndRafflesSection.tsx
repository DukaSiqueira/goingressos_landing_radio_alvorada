import { Church, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import cloudSky from "@/assets/cloudy-sky.jpg";

export function MassesAndRafflesSection() {
  return (
    <section className="w-full py-16 relative overflow-hidden">
      {/* Background com overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${cloudSky.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Conteúdo */}
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Missas e Sorteios
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white/95 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Church className="h-8 w-8 text-[#123e73]" />
                <h3 className="text-2xl font-bold text-[#123e73]">
                  Missas Mensais
                </h3>
              </div>
              <p className="text-[#123e73] leading-relaxed">
                Como membro do Clube do Ouvinte Coração Missionário, você é
                convidado a rezar conosco pelas intenções do seu coração, pela
                Rádio Alvorada e por sua família! Participe das nossas missas
                mensais, presididas pelo Pe. Luiz Senigalia e celebre a alegria
                de ser um evangelizador junto com a Rádio Alvorada.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="h-8 w-8 text-[#123e73]" />
                <h3 className="text-2xl font-bold text-[#123e73]">Sorteios</h3>
              </div>
              <p className="text-[#123e73] leading-relaxed">
                Com sua fidelidade, você concorre mensalmente a viagens
                especiais e prêmios exclusivos, como uma visita ao Santuário de
                Aparecida. Seja parte desta obra e viva experiências
                inesquecíveis!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
