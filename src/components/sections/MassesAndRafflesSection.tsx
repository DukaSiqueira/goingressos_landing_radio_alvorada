import { Church, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import cloudSky from "@/assets/cloudy-sky.jpg";

export function MassesAndRafflesSection() {
  return (
    <section className="w-full bg-[#0a1929] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Missas e Sorteios
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white/95 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Church className="h-8 w-8 text-[#123e73]" />
                <h3 className="text-2xl font-bold text-[#123e73]">Missas Mensais</h3>
              </div>
              <p className="text-[#123e73] leading-relaxed">
                Como membro do Clube do Ouvinte Coração Missionário, você é convidado para momentos de fé e gratidão. Participe das nossas missas mensais exclusivas, celebradas pelo Pe. Luís Senegali, e leve seus pedidos e intenções ao altar do Senhor.
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
                Com sua fidelidade, você concorre mensalmente a viagens especiais e prêmios exclusivos, como uma visita ao Santuário de Aparecida. Seja parte desta obra e viva experiências inesquecíveis!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 