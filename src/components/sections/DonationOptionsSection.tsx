import { DonationCard } from "@/components/ui/DonationCard";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Church, Gift } from "lucide-react";

export function DonationOptionsSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-[#123e73]">
              Escolha sua forma de contribuição e seja um pilar desta missão
              de evangelização.
            </h2>
            <p className="text-gray-500 md:text-lg text-[#123e73]">
              Oferecemos várias opções de valores para que você possa
              participar conforme sua possibilidade. Toda doação é importante!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <DonationCard value={15} />
              <DonationCard value={30} />
              <DonationCard value={50} />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#123e73]">
              Benefícios para o Contribuinte
            </h3>
            <p className="text-gray-500 md:text-lg text-[#123e73]">
              Como forma de gratidão, oferecemos benefícios exclusivos aos
              membros do Clube do Ouvinte Coração Missionário:
            </p>
            <div className="grid gap-4">
              <BenefitCard
                icon={<Calendar className="h-5 w-5 text-[#123e73]" />}
                title="Aniversariantes do Mês"
                description="Sorteio mensal de um bolo para aniversariantes do mês."
              />
              <BenefitCard
                icon={<Church className="h-5 w-5 text-[#123e73]" />}
                title="Missas Mensais"
                description="Missas especiais mensais celebradas pelo Pe. Luís Senegali."
              />
              <BenefitCard
                icon={<Gift className="h-5 w-5 text-[#123e73]" />}
                title="Sorteios de Viagens"
                description="Concorrência a viagens exclusivas para o Santuário Nacional e outros locais prêmios incríveis."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <Card className="transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer group perspective">
      <CardHeader className="group-hover:animate-flip-h">
        <CardTitle className="flex items-center gap-2 text-[#123e73]">
          {icon}
          {title}
        </CardTitle>
        <CardDescription className="text-[#123e73]">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
} 