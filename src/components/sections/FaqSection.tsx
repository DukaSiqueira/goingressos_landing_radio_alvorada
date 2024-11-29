import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
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
                Sim, você pode ajustar o valor ou cancelar a qualquer momento.
                Basta entrar em contato conosco pelo WhatsApp (43) 99140-0629.
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
                Os sorteios são feitos mensalmente e incluem prêmios especiais
                para membros do Clube.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
} 