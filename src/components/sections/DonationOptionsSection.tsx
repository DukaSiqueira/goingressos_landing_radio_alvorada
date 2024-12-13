import { DonationCard } from "@/components/ui/DonationCard";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Church, Gift } from "lucide-react";
import { PaymentMethods } from "../ui/PaymentMethods";

export function DonationOptionsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-[#123e73]">
              Quem contribui com a evangelização tem os mesmos méritos de um
              evangelizador!” Escolha sua forma de contribuição!
            </h2>
            <p className="text-gray-500 md:text-lg text-[#123e73]">
              Oferecemos várias opções de valores para que você possa participar
              conforme suas condições. Toda doação é importante!
            </p>
            <div className="space-y-4">
              <div className="flex flex-wrap justify-center gap-4">
                <DonationCard value={15} />
                <DonationCard value={30} />
                <DonationCard value={50} />
              </div>
              <p className="text-center text-lg font-medium text-[#123e73]">
                Ou personalize seu valor
              </p>
            </div>
            <PaymentMethods />
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

        {/* Botão de Doação */}
        <div className="mt-16 mb-8 flex justify-center">
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
