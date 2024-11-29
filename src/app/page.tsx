import Link from "next/link";
import Image from "next/image";
import { Gift, Church, Calendar, Phone } from "lucide-react";
import logoRadio from "../assets/logo-radio.svg";
import cloudSky from "../assets/cloudy-sky.jpg";
import logo from "../assets/logo-radio(1).ico";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full bg-[#1f3c6c] py-0">
        <div className="container mx-auto">
          <div className="flex justify-start">
            <div className="relative w-[150px] h-[80px]">
              <Image
                src={logo}
                alt="Rádio Alvorada"
                fill
                className="object-contain"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
              mensagem de Deus ainda mais longe
            </h1>
            <p className="text-[#f2f2f2] md:text-xl mb-8 max-w-3xl font-medium">
              Sua contribuição ajuda a Rádio Alvorada a espalhar fé, esperança e
              amor para milhares de famílias. Juntos, podemos transformar vidas
              e fortalecer nossa missão de evangelizar. Faça parte desta obra de
              Deus!!
            </p>
            <Button size="lg" className="bg-[#123e73] hover:bg-[#17365d]">
              DOE AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* Bible Verse Section */}
      <section className="w-full py-2 bg-white">
        <div className="container mx-auto px-2">
          <div className="max-w-2xl mx-auto text-center">
            <blockquote className="p-8 border-2 border-[#1f3c6c]/20 rounded-lg shadow-sm bg-gray-50/50">
              <div className="space-y-1">
                <p className="text-xl md:text-2xl font-serif italic text-[#1f3c6c] relative">
                  <span className="text-4xl text-[#1f3c6c]/20 absolute -left-4 -top-4">"</span>
                  E disse-lhes: Ide por todo o mundo, pregai o evangelho a toda criatura.
                  <span className="text-4xl text-[#1f3c6c]/20 absolute -right-4 -bottom-4">"</span>
                </p>
                <footer className="text-base text-gray-600 font-medium pt-2">
                  — Marcos 16:15
                </footer>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
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
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#123e73]">
                        R$ 15
                      </div>
                      <p className="text-sm text-[#123e73]">por mês</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#123e73]">
                        R$ 30
                      </div>
                      <p className="text-sm text-[#123e73]">por mês</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#123e73]">
                        R$ 50
                      </div>
                      <p className="text-sm text-[#123e73]">por mês</p>
                    </div>
                  </CardContent>
                </Card>
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
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#123e73]">
                      <Calendar className="h-5 w-5 text-[#123e73]" />
                      Aniversariantes do Mês
                    </CardTitle>
                    <CardDescription className="text-[#123e73]">
                      Sorteio mensal de um bolo para aniversariantes do mês.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#123e73]">
                      <Church className="h-5 w-5 text-[#123e73]" />
                      Missas Mensais
                    </CardTitle>
                    <CardDescription className="text-[#123e73]">
                      Missas especiais mensais celebradas pelo Pe. Luís
                      Senegali.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#123e73]">
                      <Gift className="h-5 w-5 text-[#123e73]" />
                      Sorteios de Viagens
                    </CardTitle>
                    <CardDescription className="text-[#123e73]">
                      Concorrência a viagens exclusivas para o Santuário
                      Nacional e outros locais prêmios incríveis.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-[#123e73]">
            Perguntas Frequentes
          </h2>
          <div className="max-w-[800px] mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#123e73]">
                  Como funciona o pagamento recorrente?
                </AccordionTrigger>
                <AccordionContent className="text-[#123e73]">
                  Ao escolher a opção de pagamento recorrente, o valor será
                  cobrado automaticamente todos os meses, garantindo seu apoio
                  contínuo à missão.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-[#123e73]">
                  Posso ajustar ou cancelar minha doação?
                </AccordionTrigger>
                <AccordionContent className="text-[#123e73]">
                  Sim, você pode ajustar o valor ou cancelar a qualquer
                  momento. Basta entrar em contato conosco pelo WhatsApp (43)
                  99140-0629.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-[#123e73]">
                  Quais são os benefícios de contribuir mensalmente?
                </AccordionTrigger>
                <AccordionContent className="text-[#123e73]">
                  Além de apoiar a evangelização, você participa de sorteios de
                  viagens, prêmios exclusivos e das missas mensais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-[#123e73]">
                  Como são realizados os sorteios?
                </AccordionTrigger>
                <AccordionContent className="text-[#123e73]">
                  Os sorteios são feitos mensalmente e incluem prêmios
                  especiais para membros do Clube.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-[#123e73]">
                Entre em Contato
              </h2>
              <p className="text-gray-500 md:text-lg text-[#123e73]">
                Tem dúvidas ou precisa de ajuda? Nossa equipe está pronta para
                atender você.
              </p>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#123e73]" />
                <Link
                  href="https://wa.me/5543991400629"
                  className="text-[#123e73] hover:underline"
                >
                  WhatsApp: (43) 99140-0629
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-[#0f0f0f] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="relative w-[200px] h-[70px]">
                <Image
                  src={logoRadio}
                  alt="Clube do Ouvinte Coração Missionário"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="grid gap-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Links Rápidos</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="hover:text-red-400">
                        Doação
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-red-400">
                        Benefícios
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-red-400">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-red-400">
                        Contato
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Legal</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="hover:text-red-400">
                        Política de Privacidade
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-red-400">
                        Termos de Uso
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 Rádio Alvorada. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
