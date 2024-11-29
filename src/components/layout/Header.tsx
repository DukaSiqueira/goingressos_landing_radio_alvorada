import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import radioLogo from "@/assets/logo-radio(1).ico";
import clubeLogo from "@/assets/logo-clube.jpg";

export function Header() {
  return (
    <header className="w-full bg-[#1f3c6c] py-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Rádio */}
          <div className="relative w-[150px] h-[80px]">
            <Image
              src={radioLogo}
              alt="Rádio Alvorada"
              fill
              className="object-contain"
              priority
              quality={100}
            />
          </div>

          {/* Logo Clube do Ouvinte */}
          <div className="flex-1 flex justify-center">
            <Image
              src={clubeLogo.src}
              alt="Logo Clube do Ouvinte"
              width={160}
              height={110}
              className="object-contain rounded-lg"
              priority
            />
          </div>

          {/* Telefone */}
          <div className="flex items-center gap-2 text-white pr-4">
            <Phone className="h-5 w-5" />
            <Link
              href="https://wa.me/5543991400629"
              className="hover:underline"
              target="_blank"
            >
              (43) 99140-0629
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 