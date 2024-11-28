import Link from "next/link";
import Image from "next/image";
import { Gift, Church, Calendar, Phone } from "lucide-react";
import logoRadio from "../assets/logo-radio.jpg";

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
      <header className="w-full bg-[#123e73] py-4">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="relative w-[300px] h-[150px]">
              <Image
                src={logoRadio}
                alt="Rádio Alvorada"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-6 md:py-12 lg:py-8 bg-gradient-to-b from-[#66c2ff] to-[#a5d8ff] relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cGF0aCBkPSJNMjggNjZMMCA1MEwwIDE2TDI4IDBMNTYgMTZMNTYgNTBMMjggNjZMMjggMTAwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYxMCIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+CjxwYXRoIGQ9Ik0yOCAwTDI4IDM0TDAgNTBMMCA4NEwyOCAxMDBMNTYgODRMNTYgNTBMMjggMzQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZjEwIiBzdHJva2Utd2lkdGg9IjIiPjwvcGF0aD4KPC9zdmc+')] opacity-30"></div>
        <div className="container px-4 md:px-6 mx-auto relative">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-bold tracking-tight mb-6 text-shadow-lg">
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
                  src="/logo-radio.jpg"
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
