import { Heart, Church, Gift, Package } from "lucide-react";
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
            Ao fazer parte do Clube, você apoia a evangelização e ainda recebe
            benefícios exclusivos. Veja o que você ganha:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-2 border-[#123e73]/10 hover:border-[#123e73]/30 transition-colors"
            >
              <CardContent className="p-6 text-center space-y-4">
                {benefit.icon}
                <h3 className="text-xl font-semibold text-[#123e73]">
                  {benefit.title}
                </h3>
                <p className="text-[#123e73]/80">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16 bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center justify-center mb-3">
            <Package className="h-6 w-6 text-[#123e73] mr-2" />
            <span className="text-xl font-semibold text-[#123e73]">Cesta de Produtos Religiosos</span>
          </div>
          <p className="text-[#123e73]/80">
            Sorteio mensal de uma cesta com produtos e artigos religiosos da livraria Livros e Livros 
            no valor aproximado de R$ 500,00.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#123e73] mb-6 text-center">
            Histórias de Impacto
          </h3>
          <p className="text-[#123e73] leading-relaxed text-center">
            Veja como sua contribuição faz a diferença! Conheça histórias
            emocionantes de ouvintes que foram tocados por nossa missão e
            participaram de eventos e sorteios inesquecíveis, como a viagem ao
            Santuário de Aparecida.
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
    description: "Participação em sorteios de viagens e prêmios exclusivos.",
  },
  {
    icon: <Church className="h-8 w-8 text-[#123e73] mx-auto" />,
    title: "Missas e Bênçãos",
    description:
      "Seu nome é colocado no altar do Senhor em todas as missas mensais do Cube do Ouvinte Coração Missionário e nos momentos de oração em nossos programas diários e santo terço.",
  },
  {
    icon: <Heart className="h-8 w-8 text-[#123e73] mx-auto" />,
    title: "Bolo de Aniversário",
    description: "Sorteio mensal de um bolo especial para aniversariantes.",
  },
];
