import Link from "next/link";
import { Phone } from "lucide-react";

export function ContactSection() {
  return (
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
  );
} 