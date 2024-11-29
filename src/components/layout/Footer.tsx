import Link from "next/link";
import Image from "next/image";
import logoRadio from "@/assets/logo-radio.svg";

export function Footer() {
  return (
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
                  <li><Link href="#" className="hover:text-red-400">Doação</Link></li>
                  <li><Link href="#" className="hover:text-red-400">Benefícios</Link></li>
                  <li><Link href="#" className="hover:text-red-400">FAQ</Link></li>
                  <li><Link href="#" className="hover:text-red-400">Contato</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="hover:text-red-400">Política de Privacidade</Link></li>
                  <li><Link href="#" className="hover:text-red-400">Termos de Uso</Link></li>
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
  );
} 