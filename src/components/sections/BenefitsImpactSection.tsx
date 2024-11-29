import { Heart, Church, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function BenefitsImpactSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#123e73] text-center mb-8">
          Benefícios de Ser um Ouvinte Coração Missionário
        </h2>
        <div className="max-w-5xl mx-auto text-center mb-12">
          <p className="text-lg text-[#123e73]/80 max-w-3xl mx-auto">
            Ao fazer parte do Clube, você apoia a evangelização e ainda recebe benefícios exclusivos. Veja o que você ganha:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 border-[#123e73]/10 hover:border-[#123e73]/30 transition-colors">
              <CardContent className="p-6 text-center space-y-4">
                {benefit.icon}
                <h3 className="text-xl font-semibold text-[#123e73]">{benefit.title}</h3>
                <p className="text-[#123e73]/80">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#123e73] mb-6 text-center">
            Histórias de Impacto
          </h3>
          <p className="text-[#123e73] leading-relaxed text-center">
            Veja como sua contribuição faz a diferença! Conheça histórias emocionantes de ouvintes que foram tocados por nossa missão e participaram de eventos e sorteios inesquecíveis, como a viagem ao Santuário de Aparecida.
          </p>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: <Gift className="h-8 w-8 text-[#123e73] mx-auto" />,
    title: "Sorteios Exclusivos",
    description: "Participe de sorteios de viagens e prêmios exclusivos mensalmente."
  },
  {
    icon: <Church className="h-8 w-8 text-[#123e73] mx-auto" />,
    title: "Missas e Bênçãos",
    description: "Receba convites para missas e bênçãos mensais especiais."
  },
  {
    icon: <Heart className="h-8 w-8 text-[#123e73] mx-auto" />,
    title: "Bolo de Aniversário",
    description: "Concorra a um bolo especial no mês do seu aniversário."
  }
]; 