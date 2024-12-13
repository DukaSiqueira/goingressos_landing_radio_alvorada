import Link from "next/link";
import { Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-12 bg-[#123e73] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://www.goingressos.com.br/acesso/login-alvorada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Doação
                </Link>
              </li>
              <li>
                <Link 
                  href="#benefits-impact" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Benefícios
                </Link>
              </li>
              <li>
                <Link 
                  href="#faq-section" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  href="https://wa.me/5543991400629"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Entre em Contato</h3>
            <p className="text-white/80 mb-4">
              Tem dúvidas ou precisa de ajuda? Nossa equipe está pronta para
              atender você.
            </p>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-white/80" />
              <Link
                href="https://wa.me/5543991400629"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                WhatsApp: (43) 99140-0629
              </Link>
            </div>
          </div>

          {/* Política de Privacidade */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Política de Privacidade e Termos de Uso</h3>
            <p className="text-white/80">
              A Rádio Alvorada respeita sua privacidade. Leia nossa{" "}
              <Link 
                href="/privacidade" 
                className="underline hover:text-white transition-colors"
              >
                Política de Privacidade
              </Link>{" "}
              e nossos{" "}
              <Link 
                href="/termos" 
                className="underline hover:text-white transition-colors"
              >
                Termos de Uso
              </Link>{" "}
              para saber mais.
            </p>
          </div>
        </div>

        {/* Frase Inspiradora */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-center text-white/90 max-w-3xl mx-auto">
            Quem contribui com a evangelização tem os mesmos méritos de um evangelizador! 
            Deus ama quem dá com alegria! Junte-se a nós, evangelize conosco através da sua doação!
          </p>
        </div>
      </div>
    </footer>
  );
} 